/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('disney_rides').insert([
    {id: 1, name: 'Space Mountain', thrill_level: 8, disney_parks_id: 1},
    {id: 2, name: 'Pirates of the Caribbean', thrill_level: 3, disney_parks_id: 1},
    {id: 3, name: 'Big Thunder Mountain Railroad', thrill_level: 7, disney_parks_id: 1},
    {id: 4, name: 'Splash Mountain', thrill_level: 7, disney_parks_id: 1},
    {id: 5, name: 'Haunted Mansion', thrill_level: 4, disney_parks_id: 1},
    {id: 6, name: 'Expedition Everest', thrill_level: 9, disney_parks_id: 2},
    {id: 7, name: 'Avatar Flight of Passage', thrill_level: 9, disney_parks_id: 2},
    {id: 8, name: 'Kilimanjaro Safaris', thrill_level: 2, disney_parks_id: 2},
    {id: 9, name: 'Test Track', thrill_level: 8, disney_parks_id: 3},
    {id: 10, name: 'Mission: SPACE', thrill_level: 9, disney_parks_id: 3},
    {id: 11, name: 'Soarin\' Around the World', thrill_level: 5, disney_parks_id: 3},
    {id: 12, name: 'Guardians of the Galaxy: Cosmic Rewind', thrill_level: 10, disney_parks_id: 3},
    {id: 13, name: 'Tower of Terror', thrill_level: 9, disney_parks_id: 4},
    {id: 14, name: 'Rock \'n\' Roller Coaster', thrill_level: 10, disney_parks_id: 4},
    {id: 15, name: 'Rise of the Resistance', thrill_level: 7, disney_parks_id: 4},
    {id: 16, name: 'Millennium Falcon: Smugglers Run', thrill_level: 6, disney_parks_id: 4},
    {id: 17, name: 'Slinky Dog Dash', thrill_level: 5, disney_parks_id: 4},
    {id: 18, name: 'Star Tours', thrill_level: 6, disney_parks_id: 4}
  ]);
};