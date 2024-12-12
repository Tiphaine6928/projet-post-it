const { Sequelize } = require('sequelize');

// sequelize : ORM
// pg = postgresql (son client natif pour Node)
// pg-hstore (module qui gère les données JSON pour postgresql)

// (database, username, password)
const sequelize = new Sequelize('post_it', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

// test de connexion
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
        await sequelize.sync({ force: true });
    } catch (error) {
        console.error('Unable to connect to the database', error);
    }
})();

module.exports =  sequelize
