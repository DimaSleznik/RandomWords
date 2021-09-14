import { profileActionsTypes } from "./actions";
import { getStorage } from "../../functions";

const intialState = {
  WordGroup: getStorage(),
  timeIterval:{interval:0,useInterval:false},
};
console.log(intialState);
export const profileReducer = (state = intialState, action) => {
  switch (action.type) {
    case profileActionsTypes.GET_WORD:
      return { ...state, profile:(getStorage()) };
    case profileActionsTypes.SET_TIME:
      return {...state,timeIterval:action.payload}
    default:
      return state;
  }
};
