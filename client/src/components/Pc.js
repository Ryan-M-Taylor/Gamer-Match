import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { FaMouse } from "react-icons/fa";

function PC() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <div className="pc">
      <h1>
        PC <FaMouse />
      </h1>
      <div>
        <PostForm />
      </div>
      <PostList posts={posts} title="Some Feed for Thought(s)..." />
    </div>
  );
}

export default PC;
