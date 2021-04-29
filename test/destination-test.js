import chai from 'chai';
const expect = chai.expect;

import data from './sampleTestData'
import Destination from '../src/destination'

let destination1, destination2;

describe('User', () => {
  beforeEach(() => {
    destination1 = new Destination({
      "id": 1,
      "destination": "Lima, Peru",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 400,
      "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt": "overview of city buildings with a clear sky"
    })
    destination2 = new Destination({
      "id": 2,
      "destination": "Stockholm, Sweden",
      "estimatedLodgingCostPerDay": 100,
      "estimatedFlightCostPerPerson": 780,
      "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "city with boats on the water during the day time"
    })
  })

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  })

  it('Should instantiate a destination', () => {
    expect(destination1).to.be.an.instanceOf(Destination);
    expect(destination2).to.be.an.instanceOf(Destination);
  })

  it('Should contain the correct destination data', () => {
    expect(destination1.id).to.equal(1);
    expect(destination1.name).to.equal('Lima, Peru')
    expect(destination1.lodgingCostPerDay).to.equal(70)
    expect(destination1.flightCostPerPerson).to.equal(400)

    expect(destination2.id).to.equal(2);
    expect(destination2.name).to.equal('Stockholm, Sweden')
    expect(destination2.lodgingCostPerDay).to.equal(100)
    expect(destination2.flightCostPerPerson).to.equal(780)
  })

  it('Should return the price of a trip', () => {
    expect(destination1.returnPrice(4, 7)).to.equal(2299);
  })

  it('Should return the price of any trip', () => {
    expect(destination2.returnPrice(3, 2)).to.equal(2794);
  })

  // it('Should', () => {
  //   expect().to.();
  // })

})
