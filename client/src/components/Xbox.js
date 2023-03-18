import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import PostList from './PostList';
import PostForm from "./PostForm";

function Xbox() {

    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    const xboxPosts = posts.filter((post) => post.postChannel === "Xbox");

    const postChannel = 'Xbox'
    return (
        <div>
            <h1>Xbox</h1>
            <div>
                <PostForm postChannel={postChannel} />
            </div>
            <PostList
                posts={xboxPosts}
                title="Xbox"
            />
        </div>
    )
}

export default Xbox