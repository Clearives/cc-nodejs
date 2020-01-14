import { Application, Context } from 'egg';

export default (_option, app: Application) => {
  return async function errorHandler(ctx: Context, next: () => any): Promise<void> {
    try {
      await next();
    } catch (err) {
      app.emit('error', err);
      const status = err.status || 500;
      const error = status === 500 && app.config.env === 'prod' ?
        'Internal Server Error' :
        err.message;
      ctx.body = {
        code: status,
        error,
      };
      if (status === 422) {
        ctx.body.detail = err.errors;
      }
      ctx.status = 200;
    }
  };
};
