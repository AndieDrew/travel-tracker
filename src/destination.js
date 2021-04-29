class Destination {
  constructor(data) {
    this.id = data.id;
    this.name = data.destination;
    this.lodgingCostPerDay = data.estimatedLodgingCostPerDay;
    this.flightCostPerPerson = data.estimatedFlightCostPerPerson;
  }

  returnPrice(guestAmount, duration) {
    let totalBeforeFee = ((guestAmount * this.flightCostPerPerson) + (duration * this.lodgingCostPerDay));
    let totalAfterFee = totalBeforeFee + (totalBeforeFee * .1);
    return totalAfterFee;
  }
}

export default Destination;
