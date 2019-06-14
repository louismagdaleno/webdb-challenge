exports.up = function(knex, Promise) {
	return knex.schema.createTable('projects', (tbl) => {
		tbl.increments(); // unique id
		tbl.string('name', 100).notNullable(); // string with max of 100 characters
		tbl.text('description', 255).notNullable(); // text has unlimited characters
		tbl.boolean('completed').defaultTo(false); // takes true or false, returns 0 and 1
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('projects');
};
