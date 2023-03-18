import React from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { QUERY_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { SiNintendoswitch } from "react-icons/si";

function Nintendo() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <div className="nintendo">
      <h1>
        Nintendo <SiNintendoswitch />
      </h1>
      <div>
        <PostForm />
      </div>
      <PostList posts={posts} title="Some Feed for Thought(s)..." />
    </div>
  );
}

export default Nintendo;
