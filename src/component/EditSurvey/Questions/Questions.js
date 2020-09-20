import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { QuestionTypes } from '../../../utility/util';
import { getActiveQuestion } from '../../../store/reducers/editSurveyReducer';
import * as action from '../../../store/actions/rootAction';

import MultipleChoiceEditor from './QuestionEditors/MultipleChoiceEditor';
import TextEditor from './QuestionEditors/TextEditor';

import './Question.css';

const questionEditorMap = {
  [QuestionTypes.CHECKBOXES]: (question, updateQuestion) => {
    return (
      <MultipleChoiceEditor {...question} updateQuestion={updateQuestion} />
    );
  },
  [QuestionTypes.DROPDOWN]: (question, updateQuestion) => {
    return (
      <MultipleChoiceEditor {...question} updateQuestion={updateQuestion} />
    );
  },
  [QuestionTypes.MULTI_CHOICE]: (question, updateQuestion) => {
    return (
      <MultipleChoiceEditor {...question} updateQuestion={updateQuestion} />
    );
  },
  [QuestionTypes.SINGLE_LINE_TEXT]: (question, updateQuestion) => {
    return <TextEditor {...question} updateQuestion={updateQuestion} />;
  },
  [QuestionTypes.MUTLI_LINE_TEXT]: (question, updateQuestion) => {
    return <TextEditor {...question} updateQuestion={updateQuestion} />;
  },
};

const Questions = (props) => {
  const question = useSelector((state) => getActiveQuestion(state.survey));
  const dispatch = useDispatch();
  const updateQuestion = (id, value) => {
    dispatch(action.updateQuestion(id, value));
  };
  let mapped = '';
  if (questionEditorMap[question.type]) {
    mapped = questionEditorMap[question.type](question, updateQuestion);
  }
  return <div className="Question">{mapped}</div>;
};

export default Questions;
