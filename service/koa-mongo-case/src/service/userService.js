import UserModel from '../models/user'
import BaseService from './baseService'

class UserService extends BaseService {
  constructor(model) {
    super(model)
  }
}
export default new UserService(UserModel)