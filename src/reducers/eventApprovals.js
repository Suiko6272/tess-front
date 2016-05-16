/**
 * Created by Suiko on 5/16/2016.
 */
import {SAVE_EVENT_APPROVALS, APPROVE_EVENT, TRASH_EVENT, UN_APPROVE_EVENT} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState_approval';
//import calculator from '../businessLogic/fuelSavingsCalculator';
//import dateHelper from '../businessLogic/dateHelper';


export default function eventApprovalsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_EVENT_APPROVALS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      //return objectAssign({}, state, {dateModified: dateHelper.getFormattedDateTime(new Date())});

      return state;

    case APPROVE_EVENT:
    {
      // limit scope with this code block, to satisfy eslint no-case-declarations rule.
      let newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      const calc = calculator();
      newState.necessaryDataIsProvidedToCalculateSavings = calc.necessaryDataIsProvidedToCalculateSavings(newState);
      newState.dateModified = dateHelper.getFormattedDateTime(new Date());

      if (newState.necessaryDataIsProvidedToCalculateSavings) {
        newState.savings = calc.calculateSavings(newState);
      }

      return newState;
    }
    case TRASH_EVENT:
    {
      let newState = objectAssign({}, state);
      return newState;
    }
    case UN_APPROVE_EVENT:
    {
      let newState = objectAssign({}, state);
      return newState;
    }

    default:
      return state;
  }
}
