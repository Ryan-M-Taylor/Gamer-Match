import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { FaMouse } from "react-icons/fa";

function PC() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  const pcPosts = posts.filter((post) => post.postChannel === "PC");
  const postChannel = 'PC';

  return (
    <div className="pc text-center">
      <h1>
        PC <FaMouse />
      </h1>
      <div>
        <PostForm postChannel={postChannel}/>
      </div>
      <PostList posts={pcPosts} title="PC" />
    </div>
  );
}

export default PC;
