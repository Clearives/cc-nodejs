export default ({isOk = true, code = 200, data}) => {
  let res = {}
  if(isOk) {
    res = {
      status: 'ok',
      code: code,
      data: data
    }
  } else {
    res = {
      status: 'error',
      code: code,
      msg: data
    }
  }
  return res
}