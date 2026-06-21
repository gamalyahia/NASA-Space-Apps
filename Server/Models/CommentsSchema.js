import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    comment: { type: String },
    problemTitle:{type:String}
})

export const commentModel = mongoose.model("comments", commentSchema);