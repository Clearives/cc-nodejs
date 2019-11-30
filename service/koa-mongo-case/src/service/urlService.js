import UrlModel from '../models/url'
import BaseService from './baseService'

class UrlService extends BaseService {
  constructor(model) {
    super(model)
  }
  /**
   * @description findOne override
   * @param {*} options
   * @returns
   * @memberof UrlService
   */
  async findOne(options) {
    try {
      const res = await this._model.findOne(options).populate({
        path: 'author',
        select: 'mobile -_id'
      }).exec()
      return res
    } catch (e) {
      throw e
    }
  };
  /**
   * @description findOneByAggregate 聚合管道
   * @param {*} options
   * @returns
   * @memberof UrlService
   */
  async findOneByAggregate(options) {
    try {
      const res = await this._model.aggregate([
        {
          $lookup:
          {
            from: 'users',
            localField: 'author',
            foreignField: '_id',
            as: 'users'
          }
        },
        {
          $match: { longUrl: options.longUrl }
        }
      ]).exec()
      return res
    } catch (e) {
      throw e
    }
  };
}
export default new UrlService(UrlModel)
