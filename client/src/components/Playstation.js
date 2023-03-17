import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import PostList from "./PostList";
import PostForm from "./PostForm";

function Playstation() {

    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    return (
        <div>
            <h1>Playstation</h1>
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

export default Playstation