module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'), // Default to 'postgres' if not set
    connection: {
      // If you're using DATABASE_URL, uncomment the next line:
      uri: env('DATABASE_URL'),

      // If you want to specify individual environment variables:
      // host: env('DATABASE_HOST'),          // Use the PGHOST value (e.g., switchback.proxy.rlwy.net)
      port: env.int('DATABASE_PORT', 5432), // Default port for PostgreSQL is 5432
      // user: env('DATABASE_USERNAME'),      // e.g., postgres
      // password: env('DATABASE_PASSWORD'),  // Your password
      // database: env('DATABASE_NAME'),      // e.g., railway
      // ssl: env.bool('DATABASE_SSL', true),  // You can set to true if SSL is required
    },
  },
});
