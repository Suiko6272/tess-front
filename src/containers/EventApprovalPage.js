/**
 * Created by Suiko on 5/7/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/eventApprovalActions';
import EventContainer from '../components/EventContainer';
//import EVENTS from '../data/Events';



export const EventApprovalPage = (props) => {
  var EVENTS = [
    {
      "description": "where the fuzzy people at!?",
      "f_approved": true,
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
    },
    {
      "description": "zombie jesus saves the day.",
      "f_approved": false,
      "f_scheduled": false,
      "id": 5,
      "title": "Zombie Jesus"
    },
    {
      "description": "Find out on the next episode if Nick remembers that it's furry not fuzzy.",
      "f_approved": true,
      "f_scheduled": false,
      "id": 3,
      "title": "Approved Event"
    },
    {
      "description": "pale people that have never seen the light of day.",
      "f_approved": true,
      "f_scheduled": true,
      "id": 4,
      "title": "Scheduled Event"
    },
  ]

  return (
    <div>
      <EventContainer
        appState={props.appState}
        containerName = "Panel Submissions"
        events={EVENTS}
        approvedContainer="False"
      />
      <EventContainer
        appState={props.appState}
        containerName="Approved Panels"
        events={EVENTS}
        approvedContainer="True"
      />
    </div>
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
