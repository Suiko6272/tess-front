/**
 * Created by Suiko on 5/9/2016.
 */

import React, {PropTypes} from 'react';
//import FuelSavingsResults from './FuelSavingsResults';
//import FuelSavingsTextInput from './FuelSavingsTextInput';
import EventThumbnail from './EventThumbnail.js';

class EventContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    //this.onTimeframeChange = this.onTimeframeChange.bind(this);
  }


  //onTimeframeChange(e) {}var



//TODO: Get JSON data from API
  render() {
    console.log(this.props);
    const {appState} = this.props;
    var approvedContainer = this.props.approvedContainer;
    var containerName = this.props.containerName;
    var objects = [];
    //var events = this.props.events;
    var events = this.props.appState.events;
    console.log(this.events);
    //TODO: Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `EventContainer`. See https://fb.me/react-warning-keys for more information

    var event;


    for(var i = 0; i < events.length ; i++){
      //var event = events[i];
      event = events[i];
      var shouldShow = false;
      //event.f_approved ? <PostFormDialog ... /> : false
      console.log("hi.... approvedContainer = " + approvedContainer + " & f_approved = " + event.f_approved);


      if(approvedContainer == 'True'){
        console.log("Approved");
       if(event.f_approved) { shouldShow = true; }
       else {shouldShow = false;}
      }
      else{
        console.log("Request");
        if(event.f_approved) { shouldShow = false; }
        else {shouldShow = true;}
      }
      //TODO: see if better way changeEventApproval={this.props.actions.changeEventApproval}
      objects.push(shouldShow ? <EventThumbnail appState={appState} event={event} changeEventApproval={this.props.changeEventApproval}  /> : false);
      //objects.push(<EventThumbnail appState={appState} event={event} />);
    }
    // this.props.events.forEach(function(o) {
    //   objects.push(<EventThumbnail event={o} appState={this.props.appState} />);
    // }.bind(this));


    return (
      <div className="container">
        <h2>{containerName}</h2>
        <div className="events-container">
          {objects}
        </div>
      </div>
    );
  }

}

EventContainer.propTypes = {
  appState: PropTypes.object.isRequired,
  changeEventApproval: PropTypes.func.isRequired
};

export default EventContainer;
