import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import eventApprovalsReducer from './eventApprovals';

const rootReducer = combineReducers({
  fuelSavingsAppState,
  eventApprovalsReducer
});

export default rootReducer;
