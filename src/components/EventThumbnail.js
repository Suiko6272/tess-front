/**
 * Created by Suiko on 5/9/2016.
 */

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
//import * as actions from '../eventApprovalActions';
import eventLogic from '../businessLogic/eventLogic';
//import FuelSavingsResults from './FuelSavingsResults';
//import FuelSavingsTextInput from './FuelSavingsTextInput';

class EventThumbnail extends React.Component {



  constructor(props, context) {
    super(props, context);

    this.changeApproval = this.changeApproval.bind(this);
    this.trash = this.trash.bind(this);
    this.modal_details = this.modal_details.bind(this);
    //this.onTimeframeChange = this.onTimeframeChange.bind(this);

  }



  //onTimeframeChange(e) {}

  changeApproval() {
  //  if(f_mounting) {
   //   console.log("raesdftyftftftftyftftf");
   //   f_mounting = false;
   //   return;
   // }
    //console.log("approve");
    //this.props.event.f_approved = true;
    this.props.changeEventApproval(this.props.appState, this.props.event);

    //eventRef.f_approved = ELogic.chanageApproval(eventRef);


    //dispatch(actions.changeEventApproval(currentAppState, eventRef));
    //this.props.changeEventApproval(currentAppState, eventRef);
  }
  trash() {

  }
  modal_details(){
    //console.log("hi -------");
  }

  render() {
    const {appState} = this.props;
    let event = this.props.event;

    //TODO: an IF statement to register if Scheduled, this will add an icon & change buttons
    //TODO: an IF statement to change buttons if approved
    return (
      <div className="event-thumbnail">
        <h2>{event.title}</h2>

        <div className="btns">
          <input type="submit" value="Details" onClick={this.modal_details()}/>
          <input type="submit" value="Approve" onClick={this.changeApproval}/>
          <input type="submit" value="TRASH" onClick={this.trash()}/>
        </div>
        <div className="event-hover">
          <p>{event.description}</p>
        </div>
      </div>
    );
  }

}


//changeEventApproval: PropTypes.func.isRequired,
//trashEvent: PropTypes.func.isRequired,
EventThumbnail.propTypes = {
  appState: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  changeEventApproval: PropTypes.func.isRequired
};
export default EventThumbnail;
