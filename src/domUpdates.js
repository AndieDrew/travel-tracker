import dataHandler from './dataHandler.js';
let yearsTotal = document.querySelector('#total'); //was undefined when in index.js
let userTripSection = document.querySelector('#trips');

const domUpdates = {

  welcomeUser(userName, total) {
    welcome.innerText = `Welcome ${userName}!`;
    yearsTotal.innerText = `You've spent $${total} on trips this year.`;
  },

  populateCards(trips) {
    console.log("DOM", trips)
    dataHandler.getAllDestinations()
      .then(result => {
        trips.forEach(trip => {
          result.destinations.forEach(place => {
            if (trip.destinationID === place.id) {
              console.log(trip, place);
              userTripSection.innerHTML +=
              `<div class="card" >
                <img class="destination-img" src="${place.image}" alt="vacay">
                <h3>${place.destination}.</h3>
                <p>Travelers: ${trip.travelers}</p>
                <p>Date: ${trip.date}</p>
                <p>Duration: ${trip.duration}</p>
                <p>Status: ${trip.status}</p>
                <p>Estimated lodging cost per day: ${place.estimatedLodgingCostPerDay}</p>
                <p>Estimated flight cost per person: ${place.estimatedFlightCostPerPerson}</p>
              </div>`
            } //need to add place.image
          })
        })
      })
    // trips.forEach(trip => {
    //   if (trip.destinationID === destination.id) {
    //
    //   }
    // })
  }

}

export default domUpdates;
