/**
 * Created by Suiko on 5/16/2016.
 */
import {SAVE_EVENT_APPROVALS, CHANGE_APPROVAL_EVENT, TRASH_EVENT} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialStateEvents from './initialState_approval';
import eventLogic from '../businessLogic/eventLogic';
//import calculator from '../businessLogic/fuelSavingsCalculator';
//import dateHelper from '../businessLogic/dateHelper';


export default function eventApprovalsReducer(state = initialStateEvents, action) {
  switch (action.type) {
    case SAVE_EVENT_APPROVALS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      //return objectAssign({}, state, {dateModified: dateHelper.getFormattedDateTime(new Date())});

      return state;

    case CHANGE_APPROVAL_EVENT:
    {
      let newState = objectAssign({}, state);

      console.log("FINALLY I HIT THIS SPOT");
      //const ELogic = eventLogic(); //TODO: Actually implement it with seperated logic
      console.log(action);
      console.log(newState);

      for( var i = 0; i < 5 ; i++){
        if(newState.events[i].id == action.eventRef.id){
          newState.events[i].f_approved = !(newState.events[i].f_approved);
          break;
        }
      }
      return newState;
    }
    case TRASH_EVENT:
    {
      let newState = objectAssign({}, state);
      //TODO: Change model to allow events to be trashed (hidden) but not deleted from database
      return newState;
    }

          //This'll null out the state of the store
    //case USER_LOGOUT:
    //  return {}

    default:
      return state;
  }
}
