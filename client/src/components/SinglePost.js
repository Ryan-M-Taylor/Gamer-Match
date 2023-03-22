import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

import { QUERY_SINGLE_POST } from '../utils/queries';

const SinglePost = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: postId },
  });

  const post = data?.post || {};
  // console.log('****',post.postChannel)
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <div className={`${post.postChannel}-border`}>
        <h3 className={`card-header ${post.postChannel}-form p-2 m-0`}>
          {post.postAuthor} <br />
          <span style={{ fontSize: '1rem' }}>
            had this post on {post.createdAt}
          </span>
        </h3>
        <div>
          <blockquote
            className="p-3 text-center"
          >
            {post.postText}
          </blockquote>
        </div>
      </div>
      <div>
        <CommentList comments={post.comments} />
      </div>
      <div className={`m-3 p-2 ${post.postChannel}`}>
        <CommentForm postId={post._id} />
      </div>
    </div>
  );
};

export default SinglePost;
