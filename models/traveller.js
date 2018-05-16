const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeyStartLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return journeyStartLocations;
};


Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEndLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return journeyEndLocations;
};

Traveller.prototype.getModesOfTransport = function () {
  const modeOfTransport = this.journeys.map((journey) => {
    return journey.transport;
  });
  return modeOfTransport;
};


Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter(journey => journey.transport === transport);
  return journeysByTransport;
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysByMinDistance = this.journeys.filter(journey => journey.distance > minDistance);
  return journeysByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  // const filmsOverCertainLength = films.filter(film => film.length > length);
  // return filmsOverCertainLength;
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
