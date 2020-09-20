import cuid from 'cuid';

import { InitQuestions } from '../../utility/util';
import * as actionTypes from './actionTypes';

export const addQuestion = (questionType) => {
  let newQuestion = InitQuestions[questionType]();
  return {
    type: actionTypes.EDIT_SURVEY_ADD_QUESTION,
    payload: newQuestion,
    questionId: newQuestion._id,
  };
};

//redux thunk here
export const activeQuestion = (questionId) => (dispatch) => {
  dispatch({
    type: actionTypes.ACTIVE_QUESTION,
    questionId,
  });
  if (questionId === 'header') dispatch(switchTab('EDIT_SURVEY_TAB'));
  else dispatch(switchTab('EDIT_QUESTION_TAB'));
};

export const switchTab = (tab) => ({
  type: actionTypes.EDIT_SURVEY_SWITCH_TAB,
  tab,
});

export const removeQuestion = (questionId) => ({
  type: actionTypes.REMOVE_QUESTION,
  questionId,
});

export const sortQuestion = (sortedQuestionList) => ({
  type: actionTypes.SORT_QUESTION,
  payload: sortedQuestionList,
});
export const sortQuestionUp = (questionId) => ({
  type: actionTypes.SORT_QUESTION,
  questionId,
});

export const sortQuestionDown = (questionId) => ({
  type: actionTypes.SORT_QUESTION_DOWN,
  questionId,
});

export const cloneQueston = (question) => {
  return {
    type: actionTypes.CLONE_QUESTION,
    payload: {
      ...question,
      _id: cuid(),
    },
  };
};

export const updateQuestion = (questionId, params) => {
  return {
    type: actionTypes.EDIT_SURVEY_UPDATE_QUESTION,
    questionId,
    payload: params,
  };
};
