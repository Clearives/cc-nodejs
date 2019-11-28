import UrlModel from '../models/url'
/**
 * 获取全部
 * @returns {Promise}
 */
const findAll = async ({page=0, limit=20}) => {
  try {
    const res = await UrlModel.find()
    .skip(page * limit).limit(limit).sort({'_id': -1}).exec()
    return res
  } catch (e) {
    throw e
  }
};

/**
 * 获取单个
 * @param options
 * @returns {Promise}
 */
const findOne = async (options) => {
  try {
    const res = await UrlModel.findOne(options).exec()
    return res
  } catch (e) {
    throw e
  }
};

/**
 * 新增
 * @param options
 * @returns {Promise}
 */
const create = async (options) => {
  try {
    const res = await UrlModel.create(options);
    return res;
  } catch (e) {
    throw e;
  }
};

export default {
  findAll,
  findOne,
  create
}