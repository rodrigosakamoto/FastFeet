import produce from 'immer';

const INITIAL_STATE = {
  delivery: null,
  recipient: null,
  deliveryman: null,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@delivery/EDIT_SUCCESS': {
        draft.delivery = action.payload.data;
        draft.deliveryman = action.payload.deliveryman;
        draft.recipient = action.payload.recipient;
        break;
      }
      default:
    }
  });
}
