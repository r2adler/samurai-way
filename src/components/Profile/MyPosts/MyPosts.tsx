import React, { createRef } from "react";
import Post from "./Post/Post";
import { FC } from "react";
import { postsType } from "../../../redux/state";
// import { addPost } from "../../../redux/state";

interface MyPostsProps {
    posts: postsType[]
    addPost: (postMessage: string) => void
}

const MyPosts: FC<MyPostsProps> = ({ posts, addPost }) => {
    let areaEl: any = createRef()
    return (
        <div>
            <div style={{ padding: "10px" }}>
                <h3>My posts</h3>
                <div>
                    <div >
                        <textarea ref={areaEl} />
                    </div>
                    <div>
                        <button onClick={() => addPost(areaEl.current.value)}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={"posts"}>
                {
                    posts.map(obj => <Post message={obj.message} likesCount={obj.likesCount} key={obj.id} />)
                }
            </div>
        </div >
    )
}

export default MyPosts