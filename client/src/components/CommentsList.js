import React from 'react';

const CommentsList = ({ comments }) => {


    const commentsRender = comments.map(comment => <li key={comment.id}>{comment.content}</li>);


    return (
        <div>
            <ul>{commentsRender}</ul>
        </div>
    )
}

export default CommentsList;
