/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
exports.up = function (knex) {
	return knex.schema
		.createTable('dokumen', function (table) {
			table.increments('id').primary();
			table.string('noPin', 20).notNullable();
			table.string('nama', 100).notNullable();
			table.string('branch', 50).notNullable();
			table.enum('status', ['Aktif', 'Close']).notNullable();
			table.string('gudang', 50).notNullable();
			table.string('rak_aplikasi', 50).notNullable();
			table.string('file_path', 255);

			// created_at otomatis menggunakan timestamp
			table.timestamp('created_at').defaultTo(knex.fn.now());

			// Gunakan knex.raw() untuk updated_at agar auto-update pada perubahan data
			table.timestamp('updated_at').defaultTo(knex.fn.now());
		})
		.then(() =>
			knex.raw(
				`ALTER TABLE dokumen MODIFY COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`
			)
		);
};

/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
exports.down = function (knex) {
	return knex.schema.dropTable('dokumen');
};
