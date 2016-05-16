/**
 * Created by Suiko on 5/16/2016.
 */
// import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
// import calculator from '../businessLogic/fuelSavingsCalculator';
// import dateHelper from '../businessLogic/dateHelper';
// import objectAssign from 'object-assign';
// import initialState from './initialState';
//
//
// export default function eventApprovalsAppState(state = initialState, action) {
//   switch (action.type) {
//     case EVENT_NAME:
//     {
//       let newState = objectAssign({}, state);

/*  Essentaially the state change logic
 goes here between the case statements,
 first we need to copy the state,
 then we validate we can make changes,
 then we make our changes and return the new state,
 redux then handles the reloading of DOM elements
 */

//       newState[action.fieldName] = action.value;
//       const calc = calculator();
//       newState.necessaryDataIsProvidedToCalculateSavings = calc.necessaryDataIsProvidedToCalculateSavings(newState);
//       newState.dateModified = dateHelper.getFormattedDateTime(new Date());
//
//       if (newState.necessaryDataIsProvidedToCalculateSavings) {
//         newState.savings = calc.calculateSavings(newState);
//       }
//       return newState;
//     }
//     default:
//       return state;
//   }
// }
//
//
