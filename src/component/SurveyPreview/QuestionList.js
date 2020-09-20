import React from 'react';
import { useDispatch } from 'react-redux';

import QuestionWrapper from './QuestionWrapper';
import * as action from './../../store/actions/rootAction';

const QuestionList = (props) => {
  const dispatch = useDispatch();
  let { questionOrder, questions, current_question_id } = props;
  let orderedQuestions = questionOrder.map((id) => questions[id]);
  return (
    <ul>
      {orderedQuestions.map((question, index) => {
        return (
          <li key={question._id}>
            <QuestionWrapper
              question={question}
              showUp={index !== 0}
              showDown={index !== orderedQuestions.length - 1}
              isActive={current_question_id === question._id}
              onActive={() => dispatch(action.activeQuestion(question))}
              onRemove={() => dispatch(action.removeQuestion(question._id))}
              onClone={() => dispatch(action.cloneQueston(question))}
              onUp={() => dispatch(action.sortQuestionUp(question._id))}
              onDown={() => dispatch(action.sortQuestionDown(question._id))}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionList;
