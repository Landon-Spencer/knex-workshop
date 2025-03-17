/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('disney_rides', table => {
    table.increments();
    table.string('name', 250)
    table.integer('thrill_level');
    table.integer('disney_parks_id');
    table.foreign('disney_parks_id').references(`disney_parks.id`);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('disney_rides', table => {
    table.dropForeign('disney_parks_id')
    table.dropColumn('disney_parks_id');
  })
  .then(function() {
    return knex.schema.dropTableIfExists('disney_rides');
  });
};
