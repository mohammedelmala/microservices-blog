import React from 'react';
import PostCreate from "./components/PostCreate";
import PostsList from "./components/PostsList";

const App = () => {
    return (
        <div className="container">
            <PostCreate />
            <hr />
            <PostsList />
        </div>
    )
}

export default App;
