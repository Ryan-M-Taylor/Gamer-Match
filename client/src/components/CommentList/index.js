import React from 'react';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3 className='mt-2'>No Comments Yet</h3>;
  }

  return (
    <>
      <h4
        className="p-1 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Comments
      </h4>
      <div className="flex-row">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12">
              <div className="mb-1">
                <h5 className="card-header">
                  {comment.commentAuthor} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="p-2 text-center">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
