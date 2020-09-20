import React from 'react';
import './App.css';

import QuestionList from './component/EditSurvey/QuestionList/QuestionsList';
import EditTab from './component/EditSurvey/Tab/EditTab';
import SurveyPreview from './component/SurveyPreview/SurveyPreview';

function App() {
  return (
    <div className="App">
      {/* <QuestionList /> */}
      <EditTab />
      {/* <SurveyPreview /> */}
    </div>
  );
}

export default App;
