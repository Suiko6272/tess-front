/**
 * Created by Suiko on 5/9/2016.
 */

import React, {PropTypes} from 'react';
//import FuelSavingsResults from './FuelSavingsResults';
//import FuelSavingsTextInput from './FuelSavingsTextInput';

class EventThumbnail extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.approve = this.approve.bind(this);
    this.trash = this.trash.bind(this);
    this.modal_details = this.modal_details.bind(this);
    //this.onTimeframeChange = this.onTimeframeChange.bind(this);

  }



  //onTimeframeChange(e) {}

  approve() {

  }
  trash() {

  }
  modal_details(){
    console.log("hi -------");
  }

  render() {
    const {appState} = this.props;
    var event = this.props.event;

    return (
      <div className="event-thumbnail">
        <h2>{event.title}</h2>

        <div className="btns">
          <input type="submit" value="Details" onClick={this.modal_details()}/>
          <input type="submit" value="Approve" onClick={this.approve()}/>
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
  event: PropTypes.object.isRequired
};
export default EventThumbnail;

// class FuelSavingsForm extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//
//     this.save = this.save.bind(this);
//     this.onTimeframeChange = this.onTimeframeChange.bind(this);
//     this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
//   }
//
//   onTimeframeChange(e) {
//     this.props.calculateFuelSavings(this.props.appState, 'milesDrivenTimeframe', e.target.value);
//   }
//
//   fuelSavingsKeypress(name, value) {
//     this.props.calculateFuelSavings(this.props.appState, name, value);
//   }
//
//   save() {
//     this.props.saveFuelSavings(this.props.appState);
//   }
//
//   render() {
//     const {appState} = this.props;
//
