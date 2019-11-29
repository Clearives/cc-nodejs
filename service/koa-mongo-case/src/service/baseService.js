class BaseService {
  constructor(model) {
    this._model = model
  }
  /**
   * @description create
   * @param {*} options
   * @returns {Promise}
   * @memberof BaseService
   */
  async create(options) {
    try {
      const res = await this._model.create(options)
      return res;
    } catch (e) {
      throw e;
    }
  }
  /**
   * @description findOne
   * @param {*} options
   * @returns {Promise}
   * @memberof BaseService
   */
  async findOne(options) {
    try {
      const res = await this._model.findOne(options).exec()
      return res
    } catch (e) {
      throw e
    }
  }
  /**
   * @description findAll
   * @param {*} options 
   * @returns {Promise}
   * @memberof BaseService
   */
  async findAll({ page = 0, limit = 20 }) {
    try {
      const res = await this._model.find()
        .skip(page * limit).limit(limit).sort({ '_id': -1 }).exec()
      return res
    } catch (e) {
      throw e
    }
  }

  /**
   * @description findByIdAndUpdate
   * @param {*} id
   * @param {*} update
   * @returns {Promise}
   * @memberof BaseService
   */
  async findByIdAndUpdate(id, update) {
    try {
      const res = await this._model.findByIdAndUpdate(id, update).exec()
      return res
    } catch (e) {
      throw e
    }
  }
}

export default BaseService