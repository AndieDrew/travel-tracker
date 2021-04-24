 let dataHandler = {

  getAllTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(response => response.json())
      .catch(err => console.log('All Travelers Data', err.message))
  },

//Not sure if I really need this
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

  //promise.all needs to be wrapped inside a function if this file is inside dataHandler object
  // return Promise.all([travelersData, userData, tripsData, destinationsData])
  //   .then(data => {
  //     let allData = {};
  //     allData.travelersData = data[0];
  //     allData.userData = data[1];
  //     allData.tripsData = data[2];
  //     allData.destinationsData = data[3];
  //     return allData;
  //   })
  //   .catch(err => console.log(err))

//     export const postTrip = (data) => {
//   fetch('http://localhost:3001/api/v1/trips', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log('post error', err));
// }

}
 export default dataHandler;
