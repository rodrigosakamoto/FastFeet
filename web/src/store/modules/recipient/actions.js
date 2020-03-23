export function removeRecipientRequest(id) {
  return {
    type: '@recipient/REMOVE_REQUEST',
    payload: { id },
  };
}

export function editRecipientRequest(id) {
  return {
    type: '@recipient/EDIT_REQUEST',
    payload: {
      id,
    },
  };
}

export function editRecipientSuccess(data) {
  return {
    type: '@recipient/EDIT_SUCCESS',
    payload: {
      data,
    },
  };
}

export function updateRecipientRequest(data) {
  return {
    type: '@recipient/UPDATE_REQUEST',
    payload: {
      data,
    },
  };
}

export function addRecipientRequest(data) {
  return {
    type: '@recipient/ADD_REQUEST',
    payload: {
      data,
    },
  };
}
