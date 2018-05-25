const Base = require('./base.js');

module.exports = class extends Base {
  async registerAction() {
    const body = this.post();
    const service = this.service('users');
    const userId = await service.register(body);
    if (userId) this.success(userId, '注册用户成功');
    else this.fail('注册用户失败', userId);
  }

  async loginAction() {
    const body = this.post();
    const service = this.service('users');
    const user = await service.login(body);
    if (user._id) this.success(user, '登录成功');
    else this.fail('用户名或密码错误');
  }
};
