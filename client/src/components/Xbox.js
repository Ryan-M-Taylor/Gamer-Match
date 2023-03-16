import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import PostList from '../components/PostList';

function Xbox() {

    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    return (
        <div>
            <h1>Xbox</h1>
            <PostList
                posts={posts}
                title="Some Feed for Thought(s)..."
            />
        </div>
    )
}

export default Xbox