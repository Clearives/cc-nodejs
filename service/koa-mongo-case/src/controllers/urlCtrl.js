import shortid from 'shortid'
import urlService from '../service/urlService'
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
  const redis_res = await ctx.state.redis.get(`cc_nodejs_findAll${JSON.stringify(query)}`);
  let res;
  if (redis_res) {
    let _redis_res = JSON.parse(redis_res)
    res = _redis_res.data
  } else {
    res = await urlService.findAll(query);
    if (res) {
      await ctx.state.redis.set(`cc_nodejs_findAll${JSON.stringify(query)}`, JSON.stringify({
        data: res,
        time: new Date().getTime()
      }), 'EX', 60)
    }
  }

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
    longUrl: query.url
  }
  const res = await urlService.findOne(quertObj);
  if (res) {
    ctx.body = resp({
      data: {
        longUrl: res.longUrl,
        urlCode: res.urlCode,
        author: res.author ? res.author.mobile : null
      }
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
 * @description findByAggregate
 * @param {*} ctx
 * @param {*} next
 */
const findByAggregate = async (ctx, next) => {
  const query = ctx.request.body;
  const quertObj = {
    longUrl: query.url
  }
  const res = await urlService.findByAggregate(quertObj);
  console.log(res.length)
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
  const isExit = await urlService.findOne({ longUrl: query.url });
  if (isExit) {
    ctx.body = resp({
      isOk: false,
      code: -1,
      data: '数据已存在'
    })
    return
  }
  const urlCode = shortid.generate()
  const urlObj = {
    longUrl: query.url,
    urlCode: urlCode,
    author: query.userId
  }
  const res = await urlService.create(urlObj);
  await userService.findByIdAndUpdate(query.userId, { $addToSet: { urls: res._id } })
  ctx.body = resp({
    data: res
  })
};

export default {
  findAll,
  findOne,
  findByAggregate,
  create
}