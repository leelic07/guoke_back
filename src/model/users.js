const Base = require('./base.js');
const { INTEGER, STRING, DATE } = think.Sequel.Sequel;

module.exports = class extends Base {
  get scheme() {
    return {
      attributes: {
        _id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userName: STRING,
        password: STRING,
        sysFlag: INTEGER,
        updatedAt: DATE,
        createdAt: DATE
      },
      options: {
        timestamps: true,
        freezeTableName: true,
        tableName: 'users'
      }
    };
  }
};
