import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { SiXbox } from "react-icons/si";

function Xbox() {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    const xboxPosts = posts.filter((post) => post.postChannel === "Xbox");
    const postChannel = 'Xbox'

  return (
    <div className="xbox text-center">
      <h1 className="post-border">
        Xbox <SiXbox />
      </h1>
      <div>
      <PostForm postChannel={postChannel} />
      </div>
      <PostList
                posts={xboxPosts}
                title="Xbox"
            />
    </div>
  );
}

export default Xbox;
