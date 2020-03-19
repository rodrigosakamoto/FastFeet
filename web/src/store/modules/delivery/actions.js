export function removeDeliveryRequest(id) {
  return {
    type: '@delivery/REMOVE_REQUEST',
    payload: { id },
  };
}

export function addDeliveryRequest(deliveryman_id, recipient_id, product) {
  return {
    type: '@delivery/ADD_REQUEST',
    payload: {
      deliveryman_id,
      recipient_id,
      product,
    },
  };
}

export function editDeliveryRequest(id) {
  return {
    type: '@delivery/EDIT_REQUEST',
    payload: {
      id,
    },
  };
}

export function editDeliverySuccess(data, recipient, deliveryman) {
  return {
    type: '@delivery/EDIT_SUCCESS',
    payload: {
      data,
      recipient,
      deliveryman,
    },
  };
}

export function updateDeliveryRequest(
  id,
  deliveryman_id,
  recipient_id,
  product
) {
  return {
    type: '@delivery/UPDATE_REQUEST',
    payload: {
      id,
      deliveryman_id,
      recipient_id,
      product,
    },
  };
}
