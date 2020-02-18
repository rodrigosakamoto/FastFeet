import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { deliveryman, delivery, problem, recipient } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Entrega cancelada',
      template: 'cancellation',
      context: {
        deliveryman: deliveryman.name,
        problem: problem.description,
        product: delivery.product,
        recipient: recipient.name,
      },
    });
  }
}

export default new CancellationMail();
