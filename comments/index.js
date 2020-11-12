const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser")
const cors = require("cors");


const app = express();

app.use(bodyParser.json());
app.use(cors());

const commentsByPosts = {};

app.get('/posts/:id/comments', (req, res) => {
    const comments = commentsByPosts[req.params.id] || []
    res.send(comments);

});


app.post("/posts/:id/comments", (req, res) => {
    const { content } = req.body;
    const id = randomBytes(4).toString("hex");
    const comments = commentsByPosts[req.params.id] || [];
    comments.push({ id, content })
    commentsByPosts[req.params.id] = comments;

    res.status(201).send(commentsByPosts[req.params.id]);

});





app.listen(4001, () => {
    console.log("comments service stated on port 4001");
})