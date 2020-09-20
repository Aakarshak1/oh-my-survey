import * as actionTypes from '../actions/actionTypes';

const intialState = {
  QUESTION_TAB: 'QUESTION_TAB',
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_SURVEY_SWITCH_TAB:
      return action.tab;
    default:
      return state;
  }
};

export default reducer;
