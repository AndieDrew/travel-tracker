import './css/base.scss';
import User from './user.js';
import dataHandler from './dataHandler.js';
import domUpdates from './domUpdates.js';

let welcome = document.querySelector('#welcome');
let dateInput = document.querySelector('#dateInput');
let durationInput = document.querySelector('#durationInput');
let guestAmount = document.querySelector('#travelersAmountInput');
let destinationSelection = document.querySelector('#destinationSelection');
let checkPriceBtn = document.querySelector('#checkPrice');
let bookTripBtn = document.querySelector('#bookTrip');
let usernameInput = document.querySelector('#usernameInput');
let passwordInput = document.querySelector('#passwordInput');
let loginSubmit = document.querySelector('#submitLogin');
let logoutBtn = document.querySelector('#logout');

let user, allTrips, allDestinations, today, currentUser;

checkPriceBtn.addEventListener('click', checkPrice);
bookTripBtn.addEventListener('click', bookTrip);
loginSubmit.addEventListener('click', validateLogin);
logoutBtn.addEventListener('click', logout);

function validateLogin() {
  if (usernameInput.value && passwordInput.value) {
    event.preventDefault()
  }
  if (usernameInput.value.replace(/\d+/g, '') === "traveler" && passwordInput.value === "travel2020") {
    currentUser = (usernameInput.value).replace(/\D/g, '');
    afterLogin();
    domUpdates.login();
  } else {
    domUpdates.loginDenied(usernameInput, passwordInput);
  }
}

function logout() {
  window.location.reload();
}

function afterLogin() {
  setMinDate();
  dataHandler.getAllDestinations().then(result => {
    allDestinations = result
    domUpdates.populateDestinationSelect(allDestinations);
  });
  dataHandler.getSingleTraveler(currentUser)
    .then(result => {
      user = new User(result);
    })
    .then(() => dataHandler.getAllTrips())
    .then(result => {
      allTrips = result
      update(result, allDestinations);
    })
}

function setMinDate() {
  let currentTime = new Date();
  today = currentTime.toISOString().substring(0, 10);
  dateInput.setAttribute("min", today);
}

function update(result, allDestinations) {
  user.returnUsersTrips(result);
  user.returnTotalSpent(today.split('-')[0], allDestinations);
  domUpdates.populateCards(user.trips, allDestinations)
  domUpdates.welcomeUser(user.name, user.total);
}

function checkPrice() {
  let date = dateInput.value.split('-').join('/')
  if (dateInput.value && durationInput.value && guestAmount.value && destinationSelection.value) {
    event.preventDefault();
    let specificLocation = allDestinations.destinations.find(destination => destination.id === Number(destinationSelection.value))
    let totalBeforeFee = ((guestAmount.value * specificLocation.estimatedFlightCostPerPerson) +
      (durationInput.value * specificLocation.estimatedLodgingCostPerDay))
    let totalAfterFee = totalBeforeFee + (totalBeforeFee * .1)
    domUpdates.displayTripCost(totalAfterFee)
  }
}

function bookTrip() {
  let date = dateInput.value.split('-').join('/')
  if (dateInput.value && durationInput.value && guestAmount.value && destinationSelection.value) {
    event.preventDefault();
    postNewTrip(date)
  }
}

function postNewTrip(date) {
  fetch("http://localhost:3001/api/v1/trips", {
      method: 'POST',
      body: JSON.stringify({
        "id": allTrips.trips.length + 1,
        "userID": user.id,
        "destinationID": Number(destinationSelection.value),
        "travelers": guestAmount.value,
        "date": date,
        "duration": durationInput.value,
        "status": "pending",
        "suggestedActivities": []
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      user.trips.push(data)
      allTrips.trips.push(data);
    })
    .then(alert("Trip has been booked and is currently pending."))
    .catch(err => console.log(`POST Error: ${err.message}`))
  dataHandler.getAllTrips().then(result => {
    update(result, allDestinations);
  });
}
