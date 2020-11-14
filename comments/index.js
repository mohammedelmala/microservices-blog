const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser")
const cors = require("cors");

const axios = require("axios");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const commentsByPosts = {};

app.get('/posts/:id/comments', (req, res) => {
    const comments = commentsByPosts[req.params.id] || []
    res.send(comments);

});


app.post("/posts/:id/comments", async (req, res) => {
    const { content } = req.body;
    const id = randomBytes(4).toString("hex");
    const comments = commentsByPosts[req.params.id] || [];
    comments.push({ id, content })
    commentsByPosts[req.params.id] = comments;

    await axios.post("http://localhost:4005/events", {
        type: "CommentCreated",
        data: { id, content, postId: req.params.id }
    })

    res.status(201).send(commentsByPosts[req.params.id]);

});


app.post("/events", (req, res) => {
    console.log(req.body.type);
    console.log(req.body.data);
    res.send({});
})





app.listen(4001, () => {
    console.log("comments service stated on port 4001");
})