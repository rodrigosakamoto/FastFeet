import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  loading: false,
  avatar: null,
  name: null,
  email: null,
  created_at: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        const { name, email, avatar, created_at } = action.payload;

        draft.signed = true;
        draft.loading = false;
        draft.name = name;
        draft.email = email;
        draft.avatar = avatar;
        draft.created_at = created_at;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        draft.name = null;
        draft.email = null;
        draft.avatar = null;
        draft.created_at = null;
        break;
      }
      default:
    }
  });
}
