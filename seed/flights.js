const db = require('../db');
const {Airport, Flight} = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const LGA = await Airport.find({code: 'LGA'});
    const ATL = await Airport.find({code: 'ATL'});
    const MSY = await Airport.find({code: 'MSY'});
    const JFK = await Airport.find({code: 'JFK'});

const flights = [
   {
    airline: 'Delta',
    flight: 'DL3881',
    price: '$320',
    numberOfSeats: 16,
    departingAirport: 'Hartsfield-Jackson Atlanta International Aiport',
    departure_date_time: Date('2024-11-18T09:13:00Z'),
    airport_id: ATL[0]._id,
    
   },
   {
    airline: 'American Airlines',
    flight: 'AA567',
    price: '$320',
    numberOfSeats: 17,
    departingAirport: 'Laguardia Airport',
    departure_date_time: Date('2024-08-05T12:45:00Z'),
    airport_id: LGA[0]._id,
    },
    {
        airline: 'Spirit',
        flight: '3345',
        price: '$90',
        numberOfSeats: 8,
        departingAirport: 'John F. Kennedy Airport',
        departure_date_time: Date('2024-07-13T05:23:00Z'),
        airport_id: JFK[0]._id
    },
    {
        airline: 'Frontier',
        flight: '3785',
        price: '$120',
        numberOfSeats: 5,
        departingAirport: 'Louis Armstrong New Orleans International Airport',
        departure_date_time: Date('2024-06-23T11:11:00Z'),
        airport_id: MSY[0]._id
    },
    {
        airline: 'Jet Blue',
        flight: 'DL534',
        price: '$687',
        numberOfSeats: 1,
        departingAirport: 'Hartsfield-Jackson Atlanta International Airport',
        departure_date_time: Date('2024-12-05T22:57:00Z'),
        airport_id: ATL[0]._id
    },
    {
        airline: 'SouthWest',
        flight: '9876',
        price: '$243',
        numberOfSeats: 4,
        departingAirport: 'Laguardia Airport',
        departure_date_time: Date('2024-05-23T14:30:00Z'),
        airport_id: LGA[0]._id
    },
    {
        airline: 'Delta',
        flight: 'DL789',
        price: '$1245',
        numberOfSeats: 12,
        departingAirport: 'John F. Kennedy Airport',
        departure_date_time: Date('2025-02-14T12:32:00Z'),
        airport_id: JFK[0]._id
    }
]

await Flight.insertMany(flights)
console.log('Created flights with airports!')
};

const run = async () => {
    await main()
    db.close()
}

run()
    
   
  
