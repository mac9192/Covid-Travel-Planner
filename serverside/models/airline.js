const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
  const airlineSchema = new mongoose.Schema({
    Airline:  { type: String, required: true},
    Destination:  { type: String, required: true},
    DepartureDate:  { type: String, required: true},
    DepartureTime:  { type: String, required: true},
    ArrivalDate:  { type: String, required: true},
    ArrivalTime:  { type: String, required: true},
    TravelRestriction:  { type: String, required: true},

  });

//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Airline', airlineSchema,'AirlineList');
//note capital S in the collection name