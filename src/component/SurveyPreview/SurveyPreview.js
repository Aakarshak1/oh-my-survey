import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { QuestionDescriptions, InitQuestions } from '../../utility/util';
import * as action from '../../store/actions/actionTypes';
import QuestionList from './QuestionList';

const SurveyPreview = () => {
  const survey = useSelector((state) => state.survey.survey);
  console.log(survey.title);
  return (
    <div>
      <QuestionList {...survey} />
    </div>
  );
};

export default SurveyPreview;
