const Base = require('./base.js');
// const fs = require('fs');

module.exports = class extends Base {
  async uploadAction() {
    // const themefile = this.file('avatar');
    // const filepath = themefile.path;// 为防止上传的时候因文件名重复而覆盖同名已上传文件，path是MD5方式产生的随机名称
    // const uploadpath = think.ROOT_PATH + '/static/theme';
    // think.mkdir(uploadpath);// 创建该目录
    // // 提取出用 ‘/' 隔开的path的最后一部分。
    // // console.log(themefile);
    // // let basename = path.basename(filepath);
    // const basename = themefile.name;// 因为本系统不允许上传同名主题，所以文件名就直接使用主题名
    // // 将上传的文件（路径为filepath的文件）移动到第二个参数所在的路径，并改为第二个参数的文件名。
    // fs.renameSync(filepath, uploadpath + '/' + basename);
    // themefile.path = uploadpath + '/' + basename;

    // // 读取压缩文件信息存数据库
    // const zip = new JSZip();

    // this.success(themefile);
    console.log(this.ctx.req.file);
    this.success(this.ctx.req.file, '上传成功');
  }
};
