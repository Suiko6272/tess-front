/**
 * Created by Suiko on 5/9/2016.
 */

import React, {PropTypes} from 'react';
//import FuelSavingsResults from './FuelSavingsResults';
//import FuelSavingsTextInput from './FuelSavingsTextInput';

class EventThumbnail extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.change_approval = this.change_approval.bind(this);
    this.trash = this.trash.bind(this);
    this.modal_details = this.modal_details.bind(this);
    //this.onTimeframeChange = this.onTimeframeChange.bind(this);

  }



  //onTimeframeChange(e) {}

  change_approval(event) {
    /*if(event.f_approved){
      if(event.f_scheduled !== true){
        event.f_approved = false;
      }
    }
    else{
      event.f_approved = true;
    }*/
  }
  trash() {

  }
  modal_details(){
    //console.log("hi -------");
  }

  render() {
    const {appState} = this.props;
    var event = this.props.event;

    //TODO: an IF statement to register if Scheduled, this will add an icon & change buttons
    //TODO: an IF statement to change buttons if approved
    return (
      <div className="event-thumbnail">
        <h2>{event.title}</h2>

        <div className="btns">
          <input type="submit" value="Details" onClick={this.modal_details()}/>
          <input type="submit" value="Approve" onClick={this.change_approval(event)}/>
          <input type="submit" value="TRASH" onClick={this.trash()}/>
        </div>
        <div className="event-hover">
          <p>{event.description}</p>
        </div>
      </div>
    );
  }

}


EventThumbnail.propTypes = {
  appState: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  change_approval: PropTypes.func.isRequired,
  trashEvent: PropTypes.func.isRequired,
};
export default EventThumbnail;
