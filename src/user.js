import domUpdates from './domUpdates.js'

class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.travelerType;
    this.trips = null;
    this.total = 0;
  }

  returnUsersTrips(allTrips, allDestinations) {
    const userTrips = allTrips.trips.filter(trip => trip.userID === this.id)
    this.trips = userTrips
    domUpdates.populateCards(userTrips, allDestinations);
  }

  returnTotalSpent(currentYear, allDestinations) {
    domUpdates.welcomeUser(this.name, this.total);
    this.trips.forEach(trip => {
      if (trip.date.includes(currentYear)) {
        allDestinations.destinations.forEach(destination => {
          if (trip.destinationID === destination.id) {
            let tripTotal = ((trip.travelers * destination.estimatedFlightCostPerPerson) +
              (trip.duration * destination.estimatedLodgingCostPerDay));
            this.addAgentFee(tripTotal)
            domUpdates.welcomeUser(this.name, this.total);
          }
        })
      }
    })
  }

  addAgentFee(tripCost) {
    let costAfterFee = tripCost + (tripCost * .1)
    this.total += costAfterFee;
  }

}

export default User;
