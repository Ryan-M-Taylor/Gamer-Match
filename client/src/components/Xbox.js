import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { SiXbox } from "react-icons/si";

function Xbox() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <div className="xbox">
      <h1>
        Xbox <SiXbox />
      </h1>
      <div>
        <PostForm />
      </div>
      <PostList posts={posts} title="Some Feed for Thought(s)..." />
    </div>
  );
}

export default Xbox;
