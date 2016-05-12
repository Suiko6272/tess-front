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
    const {appState} = this.props;
    var objects = [];
    //var events = this.props.events;
    var events = this.props.events;
    //TODO: Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `EventContainer`. See https://fb.me/react-warning-keys for more information


    for(var i = 0; i < events.length ; i++){
      //var event = events[i];
      var event = events[i];
      objects.push(<EventThumbnail appState={appState} event={event} />);
    }
    // this.props.events.forEach(function(o) {
    //   objects.push(<EventThumbnail event={o} appState={this.props.appState} />);
    // }.bind(this));


    return (
      <div className="container">
        <h2>Container Name</h2>
        <div className="events-container">
          {objects}
        </div>

        <button>View Trash</button>
      </div>
    );
  }

}

EventContainer.propTypes = {
  appState: PropTypes.object.isRequired
};

export default EventContainer;
