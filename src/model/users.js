module.exports = class extends think.Model {
  get scheme() {
    return {
      _id: {
        type: 'int',
        primary: true,
        autoIncrement: true
      },
      userName: {
        type: 'varchar(10)',
        default: '',
        unique: true
      },
      password: {
        type: 'varchar(10)',
        default: ''
      },
      createdAt: {
        type: 'datetime',
        default: () => think.datetime()
      },
      updatedAt: {
        type: 'datetime',
        default: () => think.datetime()
      },
      sysFlag: {
        type: 'int',
        default: 1
      }
    };
  }
};
