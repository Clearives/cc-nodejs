import { Service } from 'egg';

/**
 * @export
 * @class User
 * @extends {Service}
 */
export default class User extends Service {

  public async getUsers() {
    const { ctx } = this;
    const users = await ctx.model.User.find();
    return users;
  }

  public async show(_id: string) {
    const user = await this.ctx.service.user.find(_id);
    if (!user) {
      return {};
    }
    return this.ctx.model.User.findById(_id).populate('url');
  }

  async find(id: string) {
    return this.ctx.model.User.findById(id);
  }
}
