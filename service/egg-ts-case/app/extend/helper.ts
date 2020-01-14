exports.success = ({ ctx, code = 0, res = null, msg = 'success' }): void => {
  ctx.body = {
    code,
    data: res,
    msg,
  };
  ctx.status = 200;
};
