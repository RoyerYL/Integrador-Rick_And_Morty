require('dotenv').config();
const { Sequelize } = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_HOST ,DB_PORT,DB_BDD } = process.env;
const UserFunction=require('./models/User')
const FavoriteFunction=require('./models/Favorite')

const dataBase = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BDD}`,
   { logging: false, native: false }
);


UserFunction(dataBase)
FavoriteFunction(dataBase)

const { User, Favorite } = dataBase.models;

User.belongsToMany(Favorite,{through:"user_favorite"})
Favorite.belongsToMany(User,{through:"user_favorite"})

module.exports = {
   User,
   Favorite,
   dataBase,
};
