module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),  // Path to your SQLite database file
    },
    useNullAsDefault: true,  // This is required for SQLite
  },
});
