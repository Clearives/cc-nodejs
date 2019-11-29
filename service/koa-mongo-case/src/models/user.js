import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    mobile: String,
    password: String,
    urls: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Url'
        }
    ]
})
export default mongoose.model("User", userSchema)