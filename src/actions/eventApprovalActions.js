/**
 * Created by Suiko on 5/16/2016.
 */
import * as types from '../constants/actionTypes';

export function saveEventApprovals(settings) {
  return { type: types.SAVE_EVENT_APPROVALS, settings };
}

export function changeEventApproval(appState, eventRef) {
  return { type: types.CHANGE_APPROVAL_EVENT, appState, eventRef};
}

export function trashEvent(settings, eventRef) {
  return { type: types.TRASH_EVENT, settings, eventRef};
}
