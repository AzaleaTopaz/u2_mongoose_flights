const {Schema} = require('mongoose');
const Flight = new Schema (
    {
        airline: {type: String, required: true},
        flight: {type: String, required: true},
        price: {type: String, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: {type: String, required: true},
        departure_date_time: {type: Date, required: true},
        airport_id: {type: Schema.Types.ObjectId, ref: 'publisher_id'}
       
    },
    
    {timestamps: true}
    
);

module.exports = Flight;