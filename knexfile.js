/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
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
			directory: './migrations',
			tableName: 'knex_migrations',
		},
	},

	staging: {
		client: 'mysql2',
		connection: {
			host: '127.0.0.1',
			user: 'root',
			password: 'masamune',
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
			password: 'masamune',
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
