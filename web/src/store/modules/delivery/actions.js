export function removeDeliveryRequest(id) {
  return {
    type: '@delivery/REMOVE_REQUEST',
    payload: { id },
  };
}
