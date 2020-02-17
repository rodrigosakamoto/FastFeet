import Mail from '../../lib/Mail';

class NewdeliveryMail {
  get key() {
    return 'NewdeliveryMail';
  }

  async handle({ data }) {
    const { deliveryman, product, recipient } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova encomenda',
      template: 'newDelivery',
      context: {
        deliveryman: deliveryman.name,
        product,
        recipientName: recipient.name,
        recipientStreet: recipient.street,
        recipientNumber: recipient.number,
        recipientComplement: recipient.complement,
        recipientState: recipient.state,
        recipientCity: recipient.city,
        recipientZipcode: recipient.zipcode,
      },
    });
  }
}

export default new NewdeliveryMail();
