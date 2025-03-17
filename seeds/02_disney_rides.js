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
    {id: 6, name: 'Seven Dwarfs Mine Train', thrill_level: 6, disney_parks_id: 1},
    {id: 7, name: 'Jungle Cruise', thrill_level: 2, disney_parks_id: 1},
    {id: 8, name: 'Peter Pan\'s Flight', thrill_level: 1, disney_parks_id: 1},
    {id: 9, name: 'It\'s a Small World', thrill_level: 1, disney_parks_id: 1},
    {id: 10, name: 'Tomorrowland Speedway', thrill_level: 4, disney_parks_id: 1},
    {id: 11, name: 'The Many Adventures of Winnie the Pooh', thrill_level: 1, disney_parks_id: 1},
    {id: 12, name: 'Under the Sea - Journey of the Little Mermaid', thrill_level: 1, disney_parks_id: 1},
    {id: 13, name: 'Dumbo the Flying Elephant', thrill_level: 1, disney_parks_id: 1},
    {id: 14, name: 'Mad Tea Party', thrill_level: 3, disney_parks_id: 1},
    {id: 15, name: 'Buzz Lightyear\'s Space Ranger Spin', thrill_level: 3, disney_parks_id: 1},
    {id: 16, name: 'Astro Orbiter', thrill_level: 4, disney_parks_id: 1},
    {id: 17, name: 'The Barnstormer', thrill_level: 4, disney_parks_id: 1},
    {id: 18, name: 'Tron Lightcycle Run', thrill_level: 9, disney_parks_id: 1},

    // Animal Kingdom (2)
    {id: 19, name: 'Expedition Everest', thrill_level: 9, disney_parks_id: 2},
    {id: 20, name: 'Avatar Flight of Passage', thrill_level: 9, disney_parks_id: 2},
    {id: 21, name: 'Kilimanjaro Safaris', thrill_level: 2, disney_parks_id: 2},
    {id: 22, name: 'Dinosaur', thrill_level: 7, disney_parks_id: 2},
    {id: 23, name: 'Na\'vi River Journey', thrill_level: 1, disney_parks_id: 2},
    {id: 24, name: 'Kali River Rapids', thrill_level: 6, disney_parks_id: 2},
    {id: 25, name: 'TriceraTop Spin', thrill_level: 1, disney_parks_id: 2},

    // Epcot (3)
    {id: 26, name: 'Test Track', thrill_level: 8, disney_parks_id: 3},
    {id: 27, name: 'Mission: SPACE', thrill_level: 9, disney_parks_id: 3},
    {id: 28, name: 'Soarin\' Around the World', thrill_level: 5, disney_parks_id: 3},
    {id: 29, name: 'Guardians of the Galaxy: Cosmic Rewind', thrill_level: 10, disney_parks_id: 3},
    {id: 30, name: 'Frozen Ever After', thrill_level: 3, disney_parks_id: 3},
    {id: 31, name: 'Remy’s Ratatouille Adventure', thrill_level: 3, disney_parks_id: 3},
    {id: 32, name: 'Spaceship Earth', thrill_level: 1, disney_parks_id: 3},
    {id: 33, name: 'The Seas with Nemo & Friends', thrill_level: 1, disney_parks_id: 3},
    {id: 34, name: 'Journey into Imagination with Figment', thrill_level: 1, disney_parks_id: 3},
    {id: 35, name: 'Gran Fiesta Tour Starring The Three Caballeros', thrill_level: 1, disney_parks_id: 3},

    // Hollywood Studios (4)
    {id: 36, name: 'Tower of Terror', thrill_level: 9, disney_parks_id: 4},
    {id: 37, name: 'Rock \'n\' Roller Coaster', thrill_level: 10, disney_parks_id: 4},
    {id: 38, name: 'Rise of the Resistance', thrill_level: 7, disney_parks_id: 4},
    {id: 39, name: 'Millennium Falcon: Smugglers Run', thrill_level: 6, disney_parks_id: 4},
    {id: 40, name: 'Slinky Dog Dash', thrill_level: 5, disney_parks_id: 4},
    {id: 41, name: 'Star Tours', thrill_level: 6, disney_parks_id: 4},
    {id: 42, name: 'Mickey & Minnie’s Runaway Railway', thrill_level: 3, disney_parks_id: 4},
    {id: 43, name: 'Alien Swirling Saucers', thrill_level: 3, disney_parks_id: 4},
    {id: 44, name: 'Toy Story Mania!', thrill_level: 3, disney_parks_id: 4}
  ]);
};