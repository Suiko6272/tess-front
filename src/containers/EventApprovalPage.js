/**
 * Created by Suiko on 5/7/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';
//import FuelSavingsForm from '../components/FuelSavingsForm';
import EventThumbnail from '../components/EventThumbnail';

export const EventApprovalPage = (props) => {
  return (

    <EventThumbnail
      appState={props.appState}
    />

    //TODO: create event components
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
