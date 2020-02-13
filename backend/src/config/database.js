module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'fasfeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
