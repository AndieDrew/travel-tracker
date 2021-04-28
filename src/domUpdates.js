import dataHandler from './dataHandler.js';
import user from './user.js';

let yearsTotal = document.querySelector('#total');
let userTripSection = document.querySelector('#trips');
let destinationSelection = document.querySelector('#destinationSelection');
let tripPriceDisplay = document.querySelector('#tripPrice');
let header = document.querySelector('#header');
let login = document.querySelector('#login');
let tripBooking= document.querySelector('#tripBooking');
let trips = document.querySelector('#trips');
let loginFeedback = document.querySelector('#loginFeedback');

const domUpdates = {

  login() {
    login.classList.add('hidden');
    header.classList.remove('hidden');
    tripBooking.classList.remove('hidden');
    trips.classList.remove('hidden');
  },

  loginDenied(username, password) {
    username.value = "";
    password.value = "";
    loginFeedback.innerText = 'Wrong Username or Password';
  },

  welcomeUser(userName, total) {
    welcome.innerText = `Welcome ${userName}!`;
    yearsTotal.innerText = `You've spent $${total} on trips this year.`;
  },

  populateCards(trips, allDestinations) {
    userTripSection.innerHTML = '';
    trips.forEach(trip => {
      allDestinations.destinations.forEach(place => {
        if (trip.destinationID === place.id) {
          userTripSection.innerHTML +=
            `<article class="card" >
                <img class="destination-img" src="${place.image}" alt="vacay">
                <h3>${place.destination}.</h3>
                <p>Travelers: ${trip.travelers}</p>
                <p>Date: ${trip.date}</p>
                <p>Duration: ${trip.duration}</p>
                <p>Status: ${trip.status}</p>
                <p>Estimated lodging cost per day: ${place.estimatedLodgingCostPerDay}</p>
                <p>Estimated flight cost per person: ${place.estimatedFlightCostPerPerson}</p>
              </article>`
        }
      })
    })
  },

  populateDestinationSelect(data) {
    data.destinations.forEach(destination => {
      destinationSelection.innerHTML +=
        `<option  value="${destination.id}"> ${destination.destination}</option>`
    });
  },

  displayTripCost(total) {
    tripPriceDisplay.innerText = `This trip will cost ${total}.`
  }

}

export default domUpdates;
