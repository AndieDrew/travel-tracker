import './css/base.scss';

import User from './user.js'
import dataHandler from './dataHandler.js';
import domUpdates from './domUpdates.js'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)

let welcome = document.querySelector('#welcome');

let user;

window.onload = onStartup();

function onStartup() { //need parameter that will represent user
  dataHandler.getSingleTraveler(30)//have to pass in argument based on login in iteration3
    .then(result => {
        user = new User(result);
      })
    .then(() => dataHandler.getAllTrips())
    .then(trips => {
            user.returnUsersTrips(trips);
            user.returnTotalSpent(2020);
            //domUpdates.welcomeUser(this.name, this.total);
            //domUpdates.populateCards(user.trips)
//************ WHAT IS GOING ON WITH THIS CONSOLE.LOG???*****************
}).then(() => console.log(user, "\n", "user.total:", user.total))
}
