import { combineReducers } from 'redux';

import editSuveryReducer from './editSurveyReducer';
import tabReducer from './tabReducer';

const rootReduer = combineReducers({
  survey: editSuveryReducer,
  tab: tabReducer,
});

export default rootReduer;
