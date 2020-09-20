import React from 'react';

import { QuestionTypes } from '../../utility/util';
import SingleLineText from './questions/SingleLineText';
import MultiLineText from './questions/MultiLineText';
import MultiChoice from './questions/MultiChoice';
import Checkboxes from './questions/Checkboxes';
import Dropdown from './questions/Dropdown';

const questionMap = {
  [QuestionTypes.SINGLE_LINE_TEXT]: (props) => {
    return <SingleLineText {...props} />;
  },
  [QuestionTypes.MUTLI_LINE_TEXT]: (props) => {
    return <MultiLineText {...props} />;
  },
  [QuestionTypes.MULTI_CHOICE]: (props) => {
    return <MultiChoice {...props} />;
  },
  [QuestionTypes.CHECKBOXES]: (props) => {
    return <Checkboxes {...props} />;
  },
  [QuestionTypes.DROPDOWN]: (props) => {
    return <Dropdown {...props} />;
  },
};

const QuestionWrapper = (props) => {
  const {
    question,
    onActive,
    onRemove,
    isActive,
    onClone,
    onUp,
    onDown,
    showUp,
    showDown,
  } = props;

  const clickHandler = (e) => {
    console.log(e.target.id);
  };

  let QuestionComponent = questionMap[question.type](question);
  var classNames = isActive ? 'active question clearfix' : 'question clearfix';
  return (
    <div
      onClick={() => {
        onActive(question._id);
      }}
      className={classNames}
    >
      {QuestionComponent}
      <div className="btn-group pull-right">
        {showUp ? (
          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={(e) => {
              onUp(question._id);
            }}
            // onClick={() => console.log(`showUp Clicked`)}
          >
            <span className="glyphicon glyphicon-arrow-up"></span>
          </button>
        ) : (
          ''
        )}
        {showDown ? (
          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={() => onDown(question._id)}
            // onClick={() => console.log(`showDown clicked`)}
          >
            <span className="glyphicon glyphicon-arrow-down"></span>
          </button>
        ) : (
          ''
        )}
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={(e) => {
            e.stopPropagation();
            onClone(question._id);
          }}
          //   onClick={() => console.log(`onClone come here`)}
        >
          <span className="glyphicon glyphicon-plus"></span>
        </button>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() => onRemove(question._id)}
          //   onClick={() => console.log(`onRemove here`)}
        >
          <span className="glyphicon glyphicon-minus"></span>
        </button>
      </div>
    </div>
  );
};

export default QuestionWrapper;
