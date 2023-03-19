import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <h4 className="card-header p-2 m-0">
              {showUsername ? (
                <Link
                  to={`/profiles/${post.postAuthor}`}
                >
                  {post.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    posted on {post.createdAt} to {post.postChannel}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You posted this on {post.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body p-2">
              <p>{post.postText}</p>
            </div>

            <Link
              className="btn btn-block btn-squared"
              to={`/posts/${post._id}`}
            >
              Join the discussion on this thread.
            </Link>
            
          </div>
        ))}
    </div>
  );
};

export default PostList;