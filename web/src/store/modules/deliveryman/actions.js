export function removeDeliverymanRequest(id) {
  return {
    type: '@deliveryman/REMOVE_REQUEST',
    payload: { id },
  };
}
