import React from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { QUERY_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

function Nintendo() {

    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    return (
        <div>
            <h1>Nintendo</h1>
            <div>
                <PostForm />
            </div>
            <PostList
                posts={posts}
                title="Some Feed for Thought(s)..."
            />
        </div>
    )
}

export default Nintendo