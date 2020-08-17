import { SHOW_AUTH_MODAL } from "./actions";

const initialState = {
  layer: false,
  auth: {
    visible: false,
    mode: "LOGIN",
  },
  user: null,
  popup: {
    visible: null,
    title: "",
    message: "",
  },
};

export default function core(state = initialState, action) {
  switch (action.type) {
    case SHOW_AUTH_MODAL:
      return {
        ...state,
        auth: {
          mode: action.payload,
          visible: true,
        },
        layer: true,
      };
    default:
      return state;
  }
}
