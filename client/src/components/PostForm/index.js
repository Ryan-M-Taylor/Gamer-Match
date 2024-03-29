import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const PostForm = (props) => {
  const [postText, setPostText] = useState('');
  const [postChannel, setPostChannel] = useState(props.postChannel);
  // console.log(postChannel)
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST);

  // const [addPost, { error }] = useMutation(ADD_POST, {
  //   update(cache, { data: { addPost } }) {
  //     try {
  //       const { posts } = cache.readQuery({ query: QUERY_POSTS });
  //       //console.log("Post cache", cache.readQuery({ query: QUERY_POSTS }))
  //       cache.writeQuery({
  //         query: QUERY_POSTS,
  //         data: { posts: [addPost, ...posts] },
  //       });
  //     } catch (e) {
  //       console.log("Error at caching addPost")
  //       console.error(e);
  //     }

  //     // update me object's cache
  //     console.log("Cache error" , cache.readQuery({ query: QUERY_ME }))
  //     // console.log(QUERY_ME)
  //     //const captured = cache.readQuery({ query: QUERY_ME });
  //     //debugger;
  //     const { me } = cache.readQuery({ query: QUERY_ME });
  //     cache.writeQuery({
  //       query: QUERY_ME,
  //       data: { me: { ...me, posts: [...me.posts, addPost] } },
  //     });
  //   },
  // });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("postChannel", postChannel)
    try {
      const { data } = await addPost({
        variables: {
          postText,
          postChannel: postChannel,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setPostText('');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText' && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className='mt-3'>
      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          > 
            Character Count: {characterCount}/280
          </p>
          <form
            className="d-flex flex-column justify-content-center justify-space-between-md align-items-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12">
              <textarea
                name="postText"
                placeholder="Here's a new post..."
                value={postText}
                className="form-input"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 mb-4">
              <button className="btn btn-block join-btn" type="submit">
                Add Post
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p className='mb-5 mt-1'>
          You need to be logged in to share your posts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;