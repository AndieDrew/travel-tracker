 let dataHandler = {

   getAllTravelers() {
     return fetch('http://localhost:3001/api/v1/travelers')
       .then(response => response.json())
       .catch(err => console.log('All Travelers Data', err.message))
   },

   getSingleTraveler(userId) {
     return fetch(`http://localhost:3001/api/v1/travelers/${userId}`)
       .then(response => response.json())
       .catch(err => console.log('Single Traveler Data', err.message))
   },

   getAllTrips() {
     return fetch('http://localhost:3001/api/v1/trips')
       .then(response => response.json())
       .catch(err => console.log('All Trips Data', err.message))
   },

   getAllDestinations() {
     return fetch('http://localhost:3001/api/v1/destinations')
       .then(response => response.json())
       .catch(err => console.log('Destinations Data', err.message))
   },
 }
 export default dataHandler;
