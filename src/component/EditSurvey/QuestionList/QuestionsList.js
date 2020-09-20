import React, { useState } from 'react';
import { QuestionDescriptions, InitQuestions } from '../../../utility/util';
import Question from '../Questions/Questions';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../../store/actions/rootAction';

import './QuestionsList.css';

const Questions = () => {
  const [newQuestion, setNewQuestion] = useState([]);
  const questions = useSelector((state) => state.survey.questions);
  const dispatch = useDispatch();

  return (
    <div className="QuestionListPanel">
      {/* <h4>Questions</h4> */}
      <div className="QuestionList">
        {QuestionDescriptions.map((question) => {
          return (
            <a
              key={question.text}
              href="_blank"
              className="btn btn-default btn-sm"
              onClick={(e) => {
                e.preventDefault();
                dispatch(action.addQuestion(question.type));
              }}
            >
              {question.text}
            </a>
          );
        })}
        {/* <Question question={newQuestion} /> */}
      </div>
    </div>
  );
};

export default Questions;
