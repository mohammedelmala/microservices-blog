const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");


const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    console.log("get request comming from ", req.hostname);
    res.send(posts);
});

app.post("/posts", async (req, res) => {
    console.log("post request comming from ", req.hostname);

    const id = randomBytes(4).toString("hex");
    console.log(id);
    const { title } = req.body;
    posts[id] = { id, title };


    await axios.post("http://localhost:4005/events", {
        type: "PostCreated",
        data: {
            id, title
        }
    });


    res.status(201).send(posts[id]);


});





app.post("/events", (req, res) => {
    console.log(req.body.type);
    console.log(req.body.data);
    res.send({});
})


app.listen(4000, () => {
    console.log("posts service started on port 4000");
})