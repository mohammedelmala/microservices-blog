import React, { useState, useEffect } from 'react';
import axios from "axios";

import CommentCreate from "./CommentCreate";
import CommentsList from "./CommentsList";

const PostsList = () => {
    const [posts, setPosts] = useState({});

    useEffect(() => {

        const fetchData = async () => {
            const response = await axios.get("http://localhost:4000/posts");
            setPosts(response.data);
        }

        fetchData();
        //console.log(posts);

    }, []);
    //console.log(posts);

    const postList = Object.values(posts).map((post) => {
        return (
            <div className="card" style={{ width: "30%", marginBottom: "20px" }} key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentsList postId={post.id} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        );
    })

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {postList}

        </div>
    )
}

export default PostsList
