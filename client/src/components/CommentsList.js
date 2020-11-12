import React, { useState, useEffect } from 'react';
import axios from "axios";

const CommentsList = ({ postId }) => {

    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(response.data);

    }

    useEffect(() => {
        fetchComments();
    }, []);

    const commentsRender = comments.map(comment => <li key={comment.id}>{comment.content}</li>);


    return (
        <div>
            <ul>{commentsRender}</ul>
        </div>
    )
}

export default CommentsList;
