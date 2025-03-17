/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: 'mysql2', // Gunakan mysql2 untuk koneksi ke MySQL
		connection: {
			host: '127.0.0.1', // Host database (localhost atau IP server)
			user: 'root', // Username MySQL
			password: '', // Ganti dengan password MySQL Anda
			database: 'dokumen_db', // Nama database
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './migrations',
			tableName: 'knex_migrations',
		},
	},

	staging: {
		client: 'mysql2',
		connection: {
			host: '127.0.0.1',
			user: 'root',
			password: '',
			database: 'dokumen_db',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},

	production: {
		client: 'mysql2',
		connection: {
			host: '127.0.0.1',
			user: 'root',
			password: '',
			database: 'dokumen_db',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},
};
