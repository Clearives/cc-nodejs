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
}
export default new UrlService(UrlModel)
