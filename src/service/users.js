const Base = require('./base.js');

module.exports = class extends Base {
  async register(userInfo) {
    const model = this.model('users');
    userInfo.password = think.md5(userInfo.password);
    const userId = await model.add(userInfo);
    return userId;
  }

  async login(user) {
    // const model = this.model('users');
    const sequel = this.sequel('users');
    user.password = think.md5(user.password);
    const result = await sequel.findAll();
    return result;
  }
};
