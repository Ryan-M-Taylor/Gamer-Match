import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { SiPlaystation } from "react-icons/si";

function Playstation() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  const postChannel = "Playstation";
  // filters posts to only include those posted to Playstation channel
  const psPosts = posts.filter((post) => post.postChannel === "Playstation");
  return (
    <div className="playstation text-center">
      <h1 className="post-border">
        Playstation <SiPlaystation />
      </h1>
      <div>
        <PostForm postChannel={postChannel} />
      </div>
      <PostList posts={psPosts} title="Playstation" />
    </div>
  );
}

export default Playstation;
