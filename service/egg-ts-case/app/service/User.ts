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
    // const user = await this.ctx.service.user.find(_id);
    // if (!user) {
    //   return {};
    // }
    const res = await this.ctx.model.User.aggregate([
      {
        $match: { _id: this.app.mongoose.Types.ObjectId(_id) },
        // $sort: { _id: -1 },
      },
      {
        $lookup:
        {
          from: 'urls',
          localField: 'urls',
          foreignField: '_id',
          as: 'urls',
        },
      },
    ]).exec();
    return res;
    // return this.ctx.model.User.findById(_id).populate('urls', 'longUrl -_id').exec();
  }

  async find(id: string) {
    return this.ctx.model.User.findById(id);
  }
}
