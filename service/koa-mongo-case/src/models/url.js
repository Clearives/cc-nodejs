import mongoose from 'mongoose';
import plugin from './plugin';

const { Schema } = mongoose;

const urlSchema = new Schema({
    urlCode: String,
    longUrl: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})
urlSchema.plugin(plugin)
export default mongoose.model("Url", urlSchema)