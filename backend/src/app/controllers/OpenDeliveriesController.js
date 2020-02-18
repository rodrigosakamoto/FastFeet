import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class OpenDeliveriesController {
  async index(req, res) {
    const { deliverymanId } = req.params;

    const deliverymanExists = await Deliveryman.findByPk(deliverymanId);

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliverman does not exist' });
    }

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: deliverymanId,
        end_date: null,
        canceled_at: null,
      },
    });

    return res.json(deliveries);
  }

  async update(req, res) {
    return res.json();
  }
}

export default new OpenDeliveriesController();
