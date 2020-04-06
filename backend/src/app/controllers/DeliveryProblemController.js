import * as Yup from 'yup';

import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import Delivery from '../models/Delivery';
import DeliveryProblem from '../models/DeliveryProblem';

import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class DeliveryProblemController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const deliveryProblems = await DeliveryProblem.findAll({
      include: [
        {
          model: Delivery,
          as: 'delivery',
          attributes: ['product', 'deliveryman_id', 'recipient_id'],
        },
      ],
      limit: 6,
      offset: (page - 1) * 6,
    });

    return res.json(deliveryProblems);
  }

  // Lista by id
  async show(req, res) {
    const { deliveryId } = req.params;

    const deliveryProblems = await DeliveryProblem.findAll({
      where: { delivery_id: deliveryId },
    });

    return res.json(deliveryProblems);
  }

  async store(req, res) {
    const schema = Yup.object(req.body).shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    const { deliveryId } = req.params;
    const { description } = req.body;

    const delivery = await Delivery.findByPk(deliveryId);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exists' });
    }

    const problem = await DeliveryProblem.create({
      description,
      delivery_id: deliveryId,
    });

    return res.json(problem);
  }

  async delete(req, res) {
    const { problemId } = req.params;

    const problem = await DeliveryProblem.findByPk(problemId);

    if (!problem) {
      return res.status(400).json({ error: 'There is no one problem here' });
    }

    const delivery = await Delivery.findByPk(problem.delivery_id, {
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name'],
        },
      ],
    });

    if (delivery.end_date !== null && delivery.signature_id !== null) {
      return res.status(400).json('This delivery has been completed');
    }

    await DeliveryProblem.destroy({ where: { id: problemId } });

    delivery.update(
      {
        canceled_at: new Date(),
      },
      {
        where: {
          id: problem.delivery_id,
        },
      }
    );

    await Queue.add(CancellationMail.key, {
      delivery,
      deliveryman: delivery.deliveryman,
      recipient: delivery.recipient,
      problem,
    });

    return res.json();
  }
}

export default new DeliveryProblemController();
