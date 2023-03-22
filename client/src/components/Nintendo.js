import React from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { QUERY_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { SiNintendoswitch } from "react-icons/si";

function Nintendo() {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    // filters posts to only include those posted to Nintendo channel
    const ninPosts = posts.filter((post) => post.postChannel === "Nintendo");
    const postChannel = 'Nintendo'

  return (
    <div className="nintendo text-center">
      <h1 className="post-border">
        Nintendo <SiNintendoswitch />
      </h1>
      <div>
      <PostForm postChannel={postChannel}/>
      </div>
      <PostList
                posts={ninPosts}
                title="Nintendo"
            />
    </div>
  );
}

export default Nintendo;
