import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import PostList from "../components/PostList";

function PC() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <div>
      <h1>PC</h1>
      <PostList posts={posts} title="Some Feed for Thought(s)..." />
    </div>
  );
}

export default PC;
