import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { FC } from "react";
import { postsType } from "../../redux/state";


interface ProfileProps {
    posts: postsType[]
    addPost: (postMessage: string) => void
}
const Profile: FC<ProfileProps> = ({ posts, addPost }) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} addPost={addPost} />
        </div>
    )
}

export default Profile