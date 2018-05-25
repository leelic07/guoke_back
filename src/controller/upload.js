const Base = require('./base.js');
const fs = require('fs');

module.exports = class extends Base {
  async indexAction() {
    const file = this.file('avatar');
    const filePath = file.path;
    const name = file.name;
    const filename = name.split('.')[0];
    const format = name.split('.')[1];
    const date = new Date();
    const uploadPath = `./www/static/image/${think.datetime('YYYY-MM-DD')}/${filename}-${date.getTime()}.${format}`;
    fs.renameSync(filePath, uploadPath);
    file.path = uploadPath.replace(/^.\/www/, '');
    if (think.isFile(uploadPath)) this.success(file, '上传文件成功'); else this.fail('上传文件失败');
  }
};
