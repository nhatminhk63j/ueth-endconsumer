import * as actions from "constants/actions";
export interface systemState {
  readonly locale: string;
  readonly profile: some;
  readonly chains: some[];
  readonly roles: some[];
  readonly loginTempAccount?: some;
}

const initialState = {
  locale: "vi",
  profile: {},
  chains: [],
  roles: [],
  loginTempAccount: {},
};

const system = (state: systemState = initialState, action: some) => {
  switch (action.type) {
    case actions.CHANGE_LANGUAGE:
      return { ...state, locale: action.payload };
    case actions.SHOW_LOADING:
      return { ...state, isLoading: true };
    case actions.HIDE_LOADING:
      return { ...state, isLoading: false };
    case actions.UPDATE_PROFILE:
      return { ...state, profile: action.payload };
    case actions.UPDATE_CHAIN:
      return { ...state, chains: action.payload };
    case actions.UPDATE_ROLE:
      return { ...state, roles: action.payload };
    case actions.SET_LOGIN_TEMP_ACCOUNT:
      return { ...state, loginTempAccount: action.payload };
    default:
      return state;
  }
};

export default system;
