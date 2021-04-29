class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.travelerType;
    this.trips = [];
    this.total = 0;
  }

  returnUsersTrips(allTrips) {
    const userTrips = allTrips.trips.filter(trip => trip.userID === this.id)
    this.trips = userTrips
  }

  returnTotalSpent(currentYear, allDestinations) {
    this.trips.forEach(trip => {
      if (trip.date.includes(currentYear)) {
        allDestinations.destinations.forEach(destination => {
          if (trip.destinationID === destination.id) {
            let tripTotal = ((trip.travelers * destination.estimatedFlightCostPerPerson) +
              (trip.duration * destination.estimatedLodgingCostPerDay));
            this.addAgentFee(tripTotal)
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
