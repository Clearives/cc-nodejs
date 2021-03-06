import userService from '../service/userService'
import resp from '../utils/resp'
/**
 * 分页公用方法
 * @param ctx
 * @returns {page: Number, limit: Number}
 */
const pageQuerys = (ctx) => {
  return {
    page: parseInt(ctx.query.page || 0),
    limit: parseInt(ctx.query.limit || 10)
  }
}

/**
 * 获取全部
 * @param ctx
 * @param next
 * @returns {Promise}
 */
const findAll = async (ctx, next) => {
  const query = pageQuerys(ctx);
  const res = await userService.findAll(query);
  ctx.body = resp({
    data: res
  });
};

/**
 * 获取单个
 * @param ctx
 * @param next
 * @returns {Promise}
 */
const findOne = async (ctx, next) => {
  const query = ctx.request.body;
  const quertObj = {
    mobile: query.mobile
  }
  const res = await userService.findOne(quertObj);
  if (res) {
    ctx.body = resp({
      data: res
    });
  } else {
    ctx.body = resp({
      isOk: false,
      code: -1,
      data: '查询不到数据'
    });
  }
};

/**
 * 新增 
 * @param ctx
 * @param next
 * @returns {Promise}
 */
const create = async (ctx, next) => {
  const query = ctx.request.body;
  const isExit = await userService.findOne({ mobile: query.mobile });
  if (isExit) {
    ctx.body = resp({
      isOk: false,
      code: -1,
      data: '该用户已存在'
    })
    return
  }
  const userObj = {
    mobile: query.mobile,
    password: query.password
  }
  const res = await userService.create(userObj);
  ctx.body = resp({
    data: res
  })
};
/**
 * @description signIn
 * @param {*} ctx
 * @param {*} next
 */
const signIn = async (ctx, next) => {
  const query = ctx.request.body;
  const quertObj = {
    mobile: query.mobile,
    password: query.password
  }
  const res = await userService.findOne(quertObj);
  if (res) {
    ctx.session.user = res
    ctx.body = resp({
      data: res
    });
  } else {
    ctx.body = resp({
      isOk: false,
      code: -1,
      data: '登录异常'
    });
  }
};
/**
 * @description getUserInfo
 * @param {*} ctx
 * @param {*} next
 */
const getUserInfo = async (ctx, next) => {
  const sessionId = ctx.cookies.get('clearives')
  if (!sessionId) {
    ctx.body = resp({
      isOk: false,
      code: 412,
      data: '未登录'
    })
  }
  const resSession = await ctx.state.redis.get(`SESSION:${sessionId}`)

  if (resSession) {
    ctx.body = resp({
      data: (JSON.parse(resSession)).user
    });
  } else {
    ctx.body = resp({
      isOk: false,
      code: -1,
      data: '登录异常'
    });
  }
};

export default {
  findAll,
  findOne,
  create,
  signIn,
  getUserInfo
}