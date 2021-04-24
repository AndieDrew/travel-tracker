import chai from 'chai';
const expect = chai.expect;

//import dataHandler from '../src/dataHandler.js';
//import sampleTravelers from './sampleTestData';
//might need to import trips data
import data from './sampleTestData'
import User from '../src/user'

let user;

describe('User', () => {
  beforeEach(() => {
    user = new User({
      "id": 3,
      "name": "Sibby Dawidowitsch",
      "travelerType": "shopper"
    });
  })

  it('Should instantiate a User', () => {
    expect(user).to.be.an.instanceOf(User);
  })

  it('Should contain correct data', () => {
    expect(user.id).to.equal(3);
    expect(user.name).to.equal('Sibby Dawidowitsch');
    expect(user.type).to.equal('shopper');
    expect(user.trips).to.equal(null);

    user.returnUsersTrips(data.sampleData.sampleTrips);

    expect(user.trips.length).to.equal(1);
    expect(user.trips).to.deep.equal([{
      "id": 3,
      "userID": 3,
      "destinationID": 22,
      "travelers": 4,
      "date": "2020/05/22",
      "duration": 17,
      "status": "pending",
      "suggestedActivities": []
    }])
  })
})
