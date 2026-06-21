import express from 'express'
import cors from 'cors'
import { commentModel } from './Models/CommentsSchema.js';
import { DbUrl, PORT } from './Urls.js';
import mongoose from 'mongoose';

mongoose.connect(DbUrl)
    .then(() => {
        console.log(`Connected to data base on ${DbUrl}`);
    }).catch((err) =>
        console.log(err)
    )

const app = express();

app.use(cors());
app.use(express.json())

app.listen(PORT, () => {
    console.log("Connected Succefully");
})

app.post("/", async (req, res) => {
    try {
        const { comment, problemTitle } = req.body;
        if (!comment || !problemTitle) {
            return res.status(400).json({ messege: "null reference errro" })
        }
        const Comment = new commentModel({
            comment,
            problemTitle
        })
        if (Comment) {
            await Comment.save();
            return res.json({ messege: "success" })
        }
        return res.json({ messege: "fail cannot find it" })
    } catch (err) {
        res.status(400).json({ messege: err })
    }
})

app.get("/", async (req, res) => {
    try {
        const { problemTitle } = req.query;
        if (!problemTitle) {
            return res.status(400).json({ messege: "null reference errro" })
        }
        const Comments = await commentModel.find({});
        let arr = [];
        if (Comments) {
            Comments.map((comment) => {
                if (comment.problemTitle === problemTitle) {
                    arr.push(comment)
                }
            })
            return res.json({ data: arr, count: arr.length })
        }
        return res.json({ messege: "invalid data" })
    } catch (err) {
        res.status(400).json({ messege: err })
    }
})
