import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
    const [title, setTitle] = useState("");

    const onClick = async (event) => {
        event.preventDefault();
        console.log(title);
        await axios.post("http://localhost:4000/posts", { title })
        setTitle("");

    }

    return (
        <div>
            <form >
                <div className="form-group">
                    <label>Post</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" ></input>
                    <br />
                    <button className="btn btn-primary" onClick={onClick} >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PostCreate
