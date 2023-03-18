import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import PostList from "./PostList";
import PostForm from "./PostForm";

function Playstation() {

    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    const postChannel = 'Playstation'
    const psPosts = posts.filter((post) => post.postChannel === "Playstation");
    return (
        <div>
            <h1>Playstation</h1>
            <div>
                <PostForm postChannel={postChannel}/>
            </div>
            <PostList
                posts={psPosts}
                title="Playstation"
            />
        </div>
    )
}

export default Playstation