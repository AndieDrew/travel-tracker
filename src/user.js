//Reminder to import stuff when needed
//import data from '../test/sampleTestData'

class User {
  constructor(data) { //might need second parameter for trips?
    this.id = data.id;
    this.name = data.name;
    this.type = data.travelerType;
    this.trips = null; //Can I set this to a function?

  }
  //method that returns trips based on past/present/upcoming or pending
  returnUsersTrips(data) {
    const userTrips = data.filter(trip => trip.userID === this.id)
    this.trips = userTrips
  }
}

export default User;
