/**
 * Created by Suiko on 5/24/2016.
 */


//Essentially a Factory for business logic
const eventLogic = function () {

  // private function
  //const calcMonthlyCOst = function (milesDrivenPerMonth, ppg, mpg) {
  //const gallonsUsedPerMonth = milesDrivenPerMonth / mpg;
  //return gallonsUsedPerMonth * ppg;
//};


  //"description": "where the fuzzy people at!?",
  // "f_approved": true,
  //   "f_scheduled": false,
  //   "id": 1,
  //   "title": "Fuzzy"
// public
  return {

    //Returns Bool
    chanageApproval: function (oEvent) {
      try {
        console.log(oEvent.f_scheduled);
        if(oEvent.f_scheduled) {
          //TODO: ??? Instead of throwing error, maybe cascade into removing scheduled event
          throw 'Can not changeApproval of a scheduled event!!!';
        }
      return !(oEvent.f_scheduled); //Should swap flag from true to false
      }
      catch (e) {
        // statements to handle any exceptions
        console.log("ERROR: " + e);
        //logMyErrors(e); // pass exception object to error handler
      }

    },

    //Returns Event Object
    trashEvent: function (oEvent) {
      //TODO: Can I trash this (unscheduled)? Reverse Trash Flag. Approved = False
      return oEvent;
    },



    //TODO: Rework the logic here as can't easily check if it can fit here
    //Returns ScheduledEvent Object
    scheduleEvent: function (oEvent, timeBlock) {
      //timeBlock should contain ROOM, DAY, START_TIME
      //Is it Approved? Is it not Scheduled?  Create new instance of ScheduledEvent.
      if( isFalse(oEvent.f_approved) ){ throw 'Can not schedule this event until approved!!!'; }
      if(oEvent.isScheduled){ throw 'Can not schedule this event as it is scheduled else where!!!'; }
      //TODO: Does it fit in the time block?
      const newScheduledEvent = "todo";
      return newScheduledEvent; //Finally return new object to update Database.
    }
    // necessaryDataIsProvidedToCalculateSavings: function (settings) {
    //   return settings.newMpg > 0
    //     && settings.tradeMpg > 0
    //     && settings.newPpg > 0
    //     && settings.tradePpg > 0
    //     && settings.milesDriven > 0;
    // },
  };
};

export default eventLogic;
