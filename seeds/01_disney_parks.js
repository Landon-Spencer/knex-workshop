/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('disney_parks').insert([
    {id: 1, name: 'Magic Kingdom', address: '1180 7 Seas Dr Lake, Florida, Buena Vista, Florida 33607, United States', size: '142'},
    {id: 2, name: 'Animal Kingdom', address: '2901 Osceola Parkway, Lake Buena Vista, FL 32830', size: '580'},
    {id: 3, name: 'Epcot', address: '200 Epcot Center Dr., Lake Buena Vista, Florida 32830, United States', size: '300'},
    {id: 4, name: 'Hollywood Studios', address: '351 S. Studio Dr. Lake Buena Vista, FL 32830', size: '135'}
  ]);
};
