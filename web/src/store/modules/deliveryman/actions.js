export function removeDeliverymanRequest(id) {
  return {
    type: '@deliveryman/REMOVE_REQUEST',
    payload: { id },
  };
}

export function editDeliverymanRequest(id) {
  return {
    type: '@deliveryman/EDIT_REQUEST',
    payload: {
      id,
    },
  };
}

export function editDeliverymanSuccess(data) {
  return {
    type: '@deliveryman/EDIT_SUCCESS',
    payload: {
      data,
    },
  };
}

export function updateDeliverymanRequest(data) {
  return {
    type: '@deliveryman/UPDATE_REQUEST',
    payload: {
      data,
    },
  };
}

export function addDeliverymanRequest(data) {
  return {
    type: '@deliveryman/ADD_REQUEST',
    payload: {
      data,
    },
  };
}
