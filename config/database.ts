module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT'),
    connection: {
      uri: env('DATABASE_URL'),  // Using DATABASE_URL directly for simplicity
      host: env('PGHOST'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
