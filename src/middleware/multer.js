const multer = require('koa-multer');

module.exports = (options, app) => {
  const upload = multer({ dest: 'static/lcc' });
  // return upload.single('avatar');
  return upload.single('avatar');
  // return (ctx, next) => {

  // };
};
