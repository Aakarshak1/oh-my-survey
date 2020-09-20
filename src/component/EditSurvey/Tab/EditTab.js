import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as action from '../../../store/actions/rootAction';
import SurveyPreview from '../../SurveyPreview/SurveyPreview';
import QuestionList from '../QuestionList/QuestionsList';
import Question from '../Questions/Questions';
import Survey from '../Survey/Survey';

var classNames = require('classnames');

const tabs = [
  {
    type: 'QUESTIONS_TAB',
    text: 'Add Question',
    panel: <QuestionList />,
  },
  {
    type: 'EDIT_QUESTION_TAB',
    text: 'Edit Question',
    panel: <Question />,
  },
  {
    type: 'EDIT_SURVEY_TAB',
    text: 'Edit Survey',
    panel: <Survey />,
  },
];

const EditTabView = (props) => {
  const activeTab = useSelector((state) => state.tab);
  const dispatch = useDispatch();

  const onUpdateTab = (e) => {
    console.log(e);
    // setActiveTab(e);
    dispatch(action.switchTab(e));
  };
  // const { activeTab, onUpdateTab } = this.props;
  // const { activeTab } = this.props;
  return (
    <div className="EditTab">
      <ul className="nav nav-pills">
        {tabs.map((tab) => {
          return (
            <TabLink
              key={tab.type}
              active={activeTab === tab.type}
              onClick={() => {
                onUpdateTab(tab.type);
              }}
            >
              {tab.text}
            </TabLink>
          );
        })}
      </ul>
      {tabs.map((tab) => {
        return (
          <TabPanel active={activeTab === tab.type} key={tab.type}>
            {tab.panel}
          </TabPanel>
        );
      })}
      <SurveyPreview />
    </div>
  );
};

// EditTab.propTypes = {
//   tabs: PropTypes.array.isRequired,
//   activeTab: PropTypes.string.isRequired,
//   onUpdateTab: PropTypes.func.isRequired,
// };

export default EditTabView;

// sub component

const TabLink = ({ active, children, onClick }) => {
  let tabClass = classNames('tab-item', { active: active });
  return (
    <li role="presentation" className={tabClass}>
      <a
        className="btn btn-sm btn-default"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </a>
    </li>
  );
};

//   TabLink.propTypes = {
//     active: PropTypes.bool.isRequired,
//     children: PropTypes.node.isRequired,
//     onClick: PropTypes.func.isRequired,
//   };

const TabPanel = ({ active, children }) => {
  if (!active) {
    return <div></div>;
  } else {
    return <div>{children}</div>;
  }
};
