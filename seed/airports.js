const db = require('../db');
const {Airport} = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error'));

const main = async () => {
    const airports = [
        {
            name: 'Laguardia Airport',
            location: 'New York',
            code: 'LGA'
        },
        {
            name: 'Hartsfield-Jackson Atlanta International Airport',
            location: 'New York',
            code: 'ATL'
        },
        {
            name: 'Louis Armstrong New Orleans International Airport',
            location: 'Louisiana',
            code: 'MSY'
        },
        {
            name: 'John F. Kennedy Airport',
            location: 'New York',
            code: 'JFK'
        }
    ]
    await Airport.insertMany(airports)
    console.log('Created airports!')
}
const run = async () => {
    await main()
    db.close()
}

run()
