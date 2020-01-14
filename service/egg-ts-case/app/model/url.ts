import { Application } from 'egg';
import { Schema } from 'mongoose';

// 用户
export default (app: Application) => {
  const mongosee = app.mongoose;

  const UrlSchema = new mongosee.Schema({
    urlCode: String,
    longUrl: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
  }, {
    timestamps: true,
  });

  return mongosee.model('Url', UrlSchema);
};
