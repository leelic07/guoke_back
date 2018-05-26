const view = require('think-view');
const model = require('think-model');
const cache = require('think-cache');
const session = require('think-session');
const sequelize = require('think-sequelize');

module.exports = [
  view, // make application support view
  model(think.app),
  sequelize(think.app),
  cache,
  session
];
