// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
//import './dataHandler.js';

import User from './user.js'
import TripsRepo from './tripsRepo.js'
import dataHandler from './dataHandler.js';
import domUpdates from './domUpdates.js'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)

let welcome = document.querySelector('#welcome')

window.onload = onStartup();

function onStartup() {
  let user = {}
  dataHandler.getSingleTraveler(2)//have to pass in argument based on login in iteration3
    .then(result => {
        user = new User(result);
      })
    .then(() => dataHandler.getAllTrips())
    .then(trips => {
            //let tripsRepo = new TripsRepo(trips)
            //tripsRepo.filterUserTrips(user.id)
            console.log("BOOYA",trips)
            user.returnUsersTrips(trips);
            console.log(user);
            domUpdates.welcomeMessage(user.name)
          })
}

//just getting the data in the promise
dataHandler.getAllTravelers().then((result) => {
  //doing something with the data
  //console.log("ALL TRAVELERS",result)
  //  randomClass.method(result)
})

//making sure getSingleTraveler works
dataHandler.getSingleTraveler(1).then((result) => {
  //console.log("SINGLE TRAVELER", result.name)
  let user = new User(result);
  console.log(user);
})


dataHandler.getAllTrips().then((result) => {
  let tripsRepo = new TripsRepo(result);
  console.log(tripsRepo);
})
