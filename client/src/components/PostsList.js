import React, { useState, useEffect } from 'react';
import axios from "axios";

import CommentCreate from "./CommentCreate";
import CommentsList from "./CommentsList";

const PostsList = () => {
    const [posts, setPosts] = useState({});


    const fetchData = async () => {
        const response = await axios.get("http://localhost:4002/query");
        setPosts(response.data);
    }


    useEffect(() => {
        fetchData();

    }, []);


    console.log(posts);

    const postList = Object.values(posts).map((post) => {
        return (
            <div className="card" style={{ width: "30%", marginBottom: "20px" }} key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentsList comments={post.comments} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        );
    });



    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {postList}
        </div>
    )
}

export default PostsList
