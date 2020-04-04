import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';
import Recipient from '../models/Recipient';

class DeliveredController {
  async index(req, res) {
    const { deliverymanId } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const deliveries = await Delivery.findAll({
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'name',
            'street',
            'number',
            'complement',
            'state',
            'city',
            'zipcode',
          ],
        },
      ],
      where: {
        deliveryman_id: deliverymanId,
        end_date: { [Op.ne]: null },
      },
    });

    return res.json(deliveries);
  }

  async update(req, res) {
    const { deliverymanId, deliveryId } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliverman does not exists' });
    }

    const delivery = await Delivery.findByPk(deliveryId);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exists.' });
    }

    if (delivery.deliveryman_id !== Number(deliverymanId)) {
      return res
        .statu(401)
        .json({ error: 'You can only edit your own delivery ' });
    }

    if (!delivery.start_date) {
      return res
        .status(401)
        .json({ error: 'This delivery has not yet been withdrawn' });
    }

    if (delivery.end_date) {
      return res
        .status(400)
        .json({ error: 'This delivery has already been made' });
    }

    if (delivery.canceled_at) {
      return res.status(400).json({ error: 'This delivery has been canceled' });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ error: 'You must send a signature picture.' });
    }

    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    const updateDelivery = await delivery.update({
      end_date: new Date(),
      signature_id: file.id,
    });

    return res.json(updateDelivery);
  }
}

export default new DeliveredController();
