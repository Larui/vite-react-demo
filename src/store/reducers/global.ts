import { createReducer, actionType } from "../utils";

const initial = {
  firstLoaded: true,
};

type stateType = Readonly<typeof initial>;

const handlers = {
  ["SET_GLOBAL"]: (
    state: Partial<stateType>,
    action: actionType<Partial<stateType>>
  ) => {
    return Object.assign({}, state, action.data);
  },
};

const reducer = createReducer(initial, handlers);

export default reducer;
