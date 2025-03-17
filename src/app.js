const express = require('express');
const app = express();
const PORT = 8081;

const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development']);
//can remove process.env.NODE_ENV|| and it will still work

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Application up and running.')
})

app.listen(PORT, () => {
  console.log('Your Knex and Express application are running successfully on port:', PORT);
})

app.get('/parks', (request, response) => {
  knex('disney_parks')
    .select('*')
    .then(parks => {
      var parkNames = parks.map(park => park.name)
      response.json(parkNames);
    })
})

app.get('/rides', (request, response) => {
  knex('disney_rides')
    .select('*')
    .orderBy("id")
    .then(rides => {
      response.json(rides);
    })
})

app.get('/parks/:id/rides', (request, response) => {
  const parkId = request.params.id;
  knex('disney_rides')
    .select('name', 'thrill_level')
    .where({disney_parks_id: parkId})
    .then(rides => {
      response.json(rides);
    })
})

app.post('/parks', (request, response) => {
    const { name, address, size } = request.body
    knex('disney_parks')
    .insert({ name, address, size })
    .then(response.status(201).json(name))
})

app.delete('/parks/:id', (request, response) => {
    const parkId = request.params.id;
    knex('disney_parks')
      .where({id: parkId})
      .del()
      .then(response.status(200).json('Park Deleted'))
    })


app.patch('/rides/:id', (request, response) => {
  const rideId = request.params.id;
  const newThrillLevel = request.body.thrill_level;
  knex('disney_rides')
    .where({id: rideId})
    .update({thrill_level: newThrillLevel})
    .then(response.status(200).json(`Thrill Level Updated to ${newThrillLevel}`))
    })