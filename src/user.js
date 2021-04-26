//Reminder to import stuff when needed
//import data from '../test/sampleTestData'
import dataHandler from './dataHandler.js';
import domUpdates from './domUpdates.js'

class User {
  constructor(data) { //might need second parameter for trips?
    this.id = data.id;
    this.name = data.name;
    this.type = data.travelerType;
    this.trips = null; //Can I set this to a function?
    this.total = 0;

  }

  returnUsersTrips(data) {
    const userTrips = data.trips.filter(trip => trip.userID === this.id)
    this.trips = userTrips
    domUpdates.populateCards(this.trips);//should be in scripts (it isnt exporting properly)
  }

  returnTotalSpent(currentYear) {
    dataHandler.getAllDestinations()
      .then((result) => {
        this.trips.forEach(trip => {
          if (trip.date.includes(currentYear)) {
            result.destinations.forEach(destination => {
              if (trip.destinationID === destination.id) {
                let tripTotal = ((trip.travelers * destination.estimatedFlightCostPerPerson) +
                  (trip.duration * destination.estimatedLodgingCostPerDay))
                this.testMethod(tripTotal)
              }
            })
          }
        })
      })
  }

  testMethod(tripCost) {
    let costAfterFee = tripCost + (tripCost * .1)
    this.total += costAfterFee;
    domUpdates.welcomeUser(this.name, this.total);//should be in scripts(it isnt exporting properly)
  }

}

export default User;
