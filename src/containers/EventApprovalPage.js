/**
 * Created by Suiko on 5/7/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';
//import FuelSavingsForm from '../components/FuelSavingsForm';
//import EventThumbnail from '../components/EventThumbnail';
import EventContainer from '../components/EventContainer';
//import EVENTS from '../data/Events';



export const EventApprovalPage = (props) => {
  // var EVENTS = [
  //   {name: "e1", details: "My Details"},
  //   {name: "e2", details: "Other Details"},
  //   {name: "e3", details: "Final Details"}
  // ];
  var EVENTS = [
    {
      "description": "where the fuzzy people at!?",
      "f_approved": false,
      "f_scheduled": false,
      "id": 1,
      "title": "Fuzzy"
    },
    {
      "description": "pale people that have never seen the light of day.",
      "f_approved": false,
      "f_scheduled": false,
      "id": 2,
      "title": "Gamer people"
    }
  ]
  return (
    <EventContainer
      appState={props.appState}
      events={EVENTS}
      />
    // <FuelSavingsForm
    //   saveFuelSavings={props.actions.saveFuelSavings}
    //   calculateFuelSavings={props.actions.calculateFuelSavings}
    //   appState={props.appState}
    // />
  );
};

EventApprovalPage.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.fuelSavingsAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventApprovalPage);
