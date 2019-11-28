import mongoose from 'mongoose';

const { Schema } = mongoose;

const urlSchema = new Schema({
    urlCode: String,
    longUrl: String
})
export default mongoose.model("Url", urlSchema)