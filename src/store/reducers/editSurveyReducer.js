import * as actionTypes from '../actions/actionTypes';

const intialState = {
  survey: { id: '', questions: {}, questionOrder: [] },
  isLoading: false,
  error: null,
};

//TODO immer for state mutation
const reducer = (state = intialState, action) => {
  let index, newQuestionOrder;
  switch (action.type) {
    case actionTypes.EDIT_SURVEY_ADD_QUESTION:
      return {
        ...state,
        survey: {
          ...state.survey,
          questions: {
            ...state.survey.questions,
            [action.payload._id]: action.payload,
          },
          questionOrder: [...state.survey.questionOrder, action.questionId],
        },
      };
    case actionTypes.EDIT_SURVEY_UPDATE_SURVEY_HEADER:
      return {
        ...state,
        survey: {
          ...state.survey,
          ...action.payload,
        },
      };
    case actionTypes.ACTIVE_QUESTION:
      return {
        ...state,
        survey: {
          ...state.survey,
          current_question_id: action.questionId,
        },
      };
    case actionTypes.EDIT_SURVEY_UPDATE_QUESTION:
      return {
        ...state,
        survey: {
          ...state.survey,
          questions: {
            ...state.survey.questions,
            [action.questionId]: {
              ...state.survey.questions[action.questionId],
              ...action.payload,
            },
          },
        },
      };
    case actionTypes.SORT_QUESTION_UP:
      index = state.survey.questionOrder.indexOf(action.questionId);
      newQuestionOrder = [...state.survey.questionOrder];
      newQuestionOrder[index] = newQuestionOrder[index - 1];
      newQuestionOrder[index - 1] = action.questionId;
      return {
        ...state,
        survey: {
          ...state.survey,
          questionOrder: newQuestionOrder,
        },
      };
    case actionTypes.SORT_QUESTION_DOWN:
      index = state.survey.questionOrder.indexOf(action.questionId);
      newQuestionOrder = [...state.survey.questionOrder];
      newQuestionOrder[index] = newQuestionOrder[index + 1];
      newQuestionOrder[index + 1] = action.questionId;
      return {
        ...state,
        survey: {
          ...state.survey,
          questionOrder: newQuestionOrder,
        },
      };
    case actionTypes.CLONE_QUESTION:
      index = state.survey.questionOrder.indexOf(action.questionId);
      return {
        ...state,
        survey: {
          ...state.survey,
          questions: {
            ...state.survey.questions,
            [action.payload._id]: {
              ...action.payload,
            },
          },
          questionOrder: [
            ...state.survey.questionOrder.slice(0, index + 1),
            action.payload._id,
            ...state.survey.questionOrder.slice(index + 1),
          ],
        },
      };
    case actionTypes.REMOVE_QUESTION:
      index = state.survey.questionOrder.indexOf(action.questionId);
      let newQuestions = { ...state.survey.questions };
      delete newQuestions[action.questionId];
      return {
        ...state,
        survey: {
          ...state.survey,
          questions: newQuestions,
          questionOrder: [
            ...state.survey.questionOrder.slice(0, index),
            ...state.survey.questionOrder.slice(index + 1),
          ],
        },
      };
    default:
      return state;
  }
};

export default reducer;

export const getActiveQuestion = (state) => {
  if (state.survey.current_question_id === undefined) return {};
  let activeQuestionId = state.survey.current_question_id._id;
  let activeQuestion = state.survey.questions[activeQuestionId];
  return activeQuestion ? activeQuestion : {};
};

export const getSurvey = (state) => {
  return state.survey.survey;
};
export const isHeaderActive = (state) => {
  return state.survey.survey.current_question_id === 'header';
};

export const getFetchStatus = (state) => {
  return state.survey.isLoading;
};

export const getFetchError = (state) => {
  return state.survey.error;
};
