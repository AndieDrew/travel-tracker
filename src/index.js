// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './dataHandler.js';

import dataHandler from './dataHandler.js';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)

//getting promise
console.log("First", dataHandler.getAllTravelers())

//just getting the data in the promise
dataHandler.getAllTravelers().then((result) => {
//doing something with the data
  console.log(result)
//  randomClass.method(result)
})

//making sure getSingleTraveler works
dataHandler.getSingleTraveler(1).then((result) => {
  console.log("SINGLE TRAVELER", result)
})
