/**
 * Created by Suiko on 5/16/2016.
 */
import * as types from '../constants/actionTypes';

export function saveEventApprovals(settings) {
  return { type: types.SAVE_EVENT_APPROVALS, settings };
}

export function approveEvent(settings, eventRef) {
  return { type: types.APPROVE_EVENT, settings, eventRef};
}

export function trashEvent(settings, eventRef) {
  return { type: types.TRASH_EVENT, settings, eventRef};
}

export function unapproveEvent(settings, eventRef) {
  return { type: types.UN_APPROVE_EVENT, settings, eventRef};
}
