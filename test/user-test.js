import chai from 'chai';
const expect = chai.expect;

import data from './sampleTestData'
import User from '../src/user'

let user1, user2;

describe('User', () => {
  beforeEach(() => {
    user1 = new User({
      "id": 3,
      "name": "Sibby Dawidowitsch",
      "travelerType": "shopper"
    });
    user2 = new User({
      "id": 5,
      "name": "Tiffy Grout",
      "travelerType": "thrill-seeker"
    });
  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('Should instantiate a User', () => {
    expect(user1).to.be.an.instanceOf(User);
    expect(user2).to.be.an.instanceOf(User);
  })

  it('Should contain correct traveler data', () => {
    expect(user1.id).to.equal(3);
    expect(user1.name).to.equal('Sibby Dawidowitsch');
    expect(user1.type).to.equal('shopper');
    expect(user2.id).to.equal(5);
    expect(user2.name).to.equal('Tiffy Grout');
    expect(user2.type).to.equal('thrill-seeker');
  })

  it('Should have no trips by default', () => {
    expect(user1.trips).to.deep.equal([]);
    expect(user1.trips).to.have.lengthOf(0);
    expect(user2.trips).to.deep.equal([]);
    expect(user2.trips).to.have.lengthOf(0);
  })

  it('Should find correct trips and update user', () => {
    expect(user1.trips).to.deep.equal([]);

    user1.returnUsersTrips(data.sampleData);

    expect(user1.trips.length).to.equal(1);
    expect(user1.trips).to.have.lengthOf(1);
    expect(user1.trips).to.deep.equal([{
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

  it('Total should be 0 by default', () => {
    expect(user1.total).to.equal(0);
    expect(user2.total).to.equal(0);
  })

  it('Total should remain at 0 if user has no trips', () => {
    user2.returnUsersTrips(data.sampleData)
    expect(user2.trips).to.deep.equal([]);

    user2.returnTotalSpent(2021, data.sampleData);
    expect(user2.total).to.equal(0);
  })

  it('Total should remain at 0 if user has no trips in the given year', () => {
    user1.returnUsersTrips(data.sampleData)
    expect(user1.trips).to.deep.equal([{
      "id": 3,
      "userID": 3,
      "destinationID": 22,
      "travelers": 4,
      "date": "2020/05/22",
      "duration": 17,
      "status": "pending",
      "suggestedActivities": []
    }])
    user1.returnTotalSpent(2021, data.sampleData)
    expect(user1.total).to.equal(0)
  })

  it('Should return the total a user spent in the given year', () => {
    user1.returnUsersTrips(data.sampleData)
    expect(user1.trips).to.deep.equal([{
      "id": 3,
      "userID": 3,
      "destinationID": 22,
      "travelers": 4,
      "date": "2020/05/22",
      "duration": 17,
      "status": "pending",
      "suggestedActivities": []
    }])
    user1.returnTotalSpent(2020, data.sampleData)
    expect(user1.total).to.equal(4543)
  })

  it('Should add a 10% agent fee to total', () => {
    user1.addAgentFee(1000);
    expect(user1.total).to.equal(1100);

    user2.addAgentFee(5000);
    expect(user2.total).to.equal(5500)
  })

})
