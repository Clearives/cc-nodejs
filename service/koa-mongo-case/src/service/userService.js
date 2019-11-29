import UserModel from '../models/user'
/**
 * 获取全部
 * @returns {Promise}
 */
const findAll = async ({page=0, limit=20}) => {
  try {
    const res = await UserModel.find()
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
    const res = await UserModel.findOne(options).populate({
      path: 'urls',
      select: 'longUrl urlCode -_id'
    }).exec()
    console.log(res)
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
    const res = await UserModel.create(options);
    return res;
  } catch (e) {
    throw e;
  }
};

/**
 * 更新
 * @param options
 * @returns {Promise}
 */
const findByIdAndUpdate = async (id, update) => {
  try {
    const res = await UserModel.findByIdAndUpdate(id, update).exec()
    return res
  } catch (e) {
    throw e
  }
};

export default {
  findAll,
  findOne,
  create,
  findByIdAndUpdate
}