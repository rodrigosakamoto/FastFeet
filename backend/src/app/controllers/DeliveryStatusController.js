import { startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class DeliveryStatusController {
  async update(req, res) {
    const { deliverymanId, deliveryId } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does no exist.' });
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

    if (delivery.start_date) {
      return res
        .status(401)
        .json({ error: 'This delivery has already been withdrawn' });
    }

    if (delivery.end_date) {
      return res
        .status(400)
        .json({ error: 'This delivery has already been made' });
    }

    if (delivery.canceled_at) {
      return res.status(400).json({ error: 'This delivery has been canceled' });
    }

    const deliveryHour = new Date().getHours();

    if (deliveryHour < 8 || deliveryHour > 18) {
      return res
        .status(400)
        .json({ error: 'You can only withdraw from 08:00h to 18:00h.' });
    }

    const dateNow = new Date();

    const numDeliveries = await Delivery.count({
      where: {
        start_date: {
          [Op.between]: [startOfDay(dateNow), endOfDay(dateNow)],
        },
      },
    });

    if (numDeliveries >= 5) {
      return res
        .status(400)
        .json({ error: 'you can only make 5 deliveries a day' });
    }
    const updateDelivery = await delivery.update({
      start_date: new Date(),
    });

    return res.json(updateDelivery);
  }
}

export default new DeliveryStatusController();
