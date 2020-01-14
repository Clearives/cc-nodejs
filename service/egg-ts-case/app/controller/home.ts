import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const _res = await ctx.service.user.getUsers();
    ctx.body = {
      code: 0,
      data: _res,
    };
  }
}
