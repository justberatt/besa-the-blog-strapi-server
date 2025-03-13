module.exports = ({ env }) => ({
  connection: {
    client: 'postgres', // Default to 'postgres' if not set
    connection: {
      // If you're using DATABASE_URL, uncomment the next line:
      uri: env('DATABASE_URL'),

      // If you want to specify individual environment variables:
      host: env('PGHOST', '127.0.01'),          // Use the PGHOST value (e.g., switchback.proxy.rlwy.net)
      port: env.int('PGPORT', 5432), // Default port for PostgreSQL is 5432
      user: env('PGUSER'),      // e.g., postgres
      password: env('PGPASSWORD'),  // Your password
      database: env('PGDATABASE', 'strapi'),      // e.g., railway
      ssl: env.bool('DATABASE_SSL', true),  // You can set to true if SSL is required
    },
  },
});
