import * as Yup from 'yup';
import { Op } from 'sequelize';

import Recipient from '../models/Recipient';

class RecipientController {
  // Lista by id
  async show(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findOne({
      where: {
        id,
      },
      attributes: [
        'id',
        'name',
        'street',
        'number',
        'complement',
        'state',
        'city',
        'zipcode',
      ],
    });
    return res.json(recipient);
  }

  // Lista de Destinatários
  async index(req, res) {
    const { q = '', page = 1 } = req.query;

    const recipients = await Recipient.findAll({
      attributes: [
        'id',
        'name',
        'street',
        'number',
        'complement',
        'state',
        'city',
        'zipcode',
      ],
      where: {
        name: {
          [Op.iLike]: `%${q}%`,
        },
      },
      limit: 6,
      offset: (page - 1) * 6,
    });
    return res.json(recipients);
  }

  // Update de destinatários
  async update(req, res) {
    // Validação dos dados de entrada
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      state: Yup.string().min(2),
      city: Yup.string(),
      zipcode: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validatio fails' });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zipcode,
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zipcode,
    });
  }

  // Cadastro de destinatários
  async store(req, res) {
    // Validação dos dados de entrada
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string()
        .min(2)
        .required(),
      city: Yup.string().required(),
      zipcode: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async delete(req, res) {
    const { id } = req.params;

    const delivery = await Recipient.findByPk(id);

    if (!delivery) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    await Recipient.destroy({ where: { id } });

    return res.json({ message: 'Successful deleted.' });
  }
}

export default new RecipientController();
