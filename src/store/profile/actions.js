export const profileActionsTypes = {
  SET_TIME:'SET_TIME',
  GET_WORD:'GET_WORD',
};

export const profileActions = {
  getWord:()=>({
    type:profileActions.GET_WORD
  }),
  setTimeOpitions: (payload) => ({
    type: profileActionsTypes.SET_TIME,
    payload,
  })
};
