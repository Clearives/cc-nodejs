import { Application } from 'egg';
import { Schema } from 'mongoose';

// 用户
export default (app: Application) => {
  const mongosee = app.mongoose;

  const UserSchema = new mongosee.Schema({
    mobile: String,
    password: String,
    urls: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Url',
        },
    ],
  }, {
    timestamps: true,
  });

  return mongosee.model('User', UserSchema);
};
