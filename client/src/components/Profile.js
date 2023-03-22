// import React from 'react';
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import Auth from "../utils/auth.js";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import FriendList from "./FriendList";
import { ADD_FRIEND } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { SiPlaystation, SiNintendoswitch, SiXbox } from "react-icons/si";
import { FaMouse } from "react-icons/fa";
import { Link } from 'react-router-dom';

// -------------Optional Components----------------
import ProfileNav from "./Profile/ProfileNav";
// -------------Optional Components----------------

const Profile = () => {
  const { username: userParam } = useParams();
  console.log("userParam", userParam);

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  console.log(user);
  console.log(user.genres);

  // -------------Add Friend Logic below----------------

  const userId = user._id;
  const friends = user.userFriends;
  const posts = user.posts;
  const consoleIcons = {
    Playstation: <SiPlaystation />,
    Xbox: <SiXbox />,
    Nintendo: <SiNintendoswitch />,
    PC: <FaMouse />,
  };


  const [addFriend, { error }] = useMutation(ADD_FRIEND);

  const handleAddFriend = () => {
    console.log("USER ID!!!!!!!!" + userId);
    console.log("USER NAME!!!!!!" + userParam);
    addFriend({ variables: { friendId: userId } });
  };

  const [currentPage, setCurrentPage] = useState('Profile');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.

  const renderPage = () => {
    let result = null;

    switch (currentPage) {
      case 'Profile':
        result = (<div>
          {/* <h3>Favorite Consoles:</h3>
          <p>{user.favoriteConsole?.map((elem) => consoleIcons[elem])}</p> */}
          <h3>My Favorite Genres:</h3>
          <ul>
            {user.genres?.map((elem) => (
              <li key={elem._id}>{elem}</li>
            ))}
          </ul>
          <h3>Playstyle:</h3>
          <p>{user.competitive ? "Casual" : "Competitive"}</p>
          <h3>Solo or Co-Op:</h3>
          <p> {user.coOp ? "Solo" : "Co-Op"}</p>
        </div>);
        break;
      case 'Friends':
        console.log("friends", friends);
        result = (<FriendList friends={friends} />);
        break;
      case 'Posts':
        result = (<div>
          {posts &&
            posts.map((post) => (
              <div key={post._id} className="card post-border mb-3">
                <h4 className="card-header p-2 m-0">
                  {post.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    posted on {post.createdAt} to {post.postChannel}
                  </span>
                </h4>
                <div className="card-body p-2">
                  <p>{post.postText}</p>
                </div>
                <Link
                  className="btn btn-block btn-squared join-btn"
                  to={`/posts/${post._id}`}
                >
                  Join the discussion on this thread.
                </Link>

              </div>
            ))}
        </div>);
        break;
      // case 'Comments':
      //   console.log("Comments************", posts)
      //   for (let i = 0; i < posts.length; i++){
      //     if (posts[i].comments){

      //     }
      //   }
      //   result = (<div>
      //     {posts.comments?.map((comment) => {
      //       return (<div>
      //         <h4> Commented on {comment.createdAt} </h4>
      //         <p key={comment._id}> {comment.commentText} </p>
      //       </div>);
      //     })}
      //   </div>);
      //   break;
      default:
        result = (<div>Use the menu to explore your profile!</div>);
        break;
    }

    return result;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  console.log("favoriteconsolelist", user);
  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 question-form p-3 mb-5">
          {userParam
            ? `${user.username}'s Profile`

            : `${user.username}`}
          {user.favoriteConsole?.map((elem) => consoleIcons[elem])}
          {!userParam
            ? (<div className="flex-row justify-center">
              <ProfileNav currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>)
            : (
              <div></div>
            )
          }

        </h2>
        {/* <ul>
          {[
            user.favoriteConsole, // Include the user's favorite console as the first item
            user.favoriteConsole, // Spread the array of favorite consoles after the first item
          ].map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
        
        <ul>
          {[
            user.genres, // Include the user's favorite console as the first item
            ...user.genres, // Spread the array of favorite consoles after the first item
          ].map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul> */}
        {/* {userParam
          ? `You are currently viewing ${user.username}'s Profile ${user._id}`
          : `Hi ${user.username}!`}{" "} */}
        {/* <ul>
          {user.favoriteConsole?.map((elem) => (
            <li key={elem._id}>{elem}</li>
          ))}
        </ul>
        <ul>
          {user.genres?.map((elem) => (
            <li key={elem._id}>{elem}</li>
          ))}
        </ul>
        <p>
          Casual or Competitive : {user.competitive ? "Casual" : "Competitive"}
        </p>
        <p> Solo or Co-Op : {user.coOp ? "Solo" : "Co-Op"}</p> */}
        <div className="col-12 col-md-10 mb-5">
          -------------

          {userParam ? (
            <div>
              {/* This is someone elses profile */}
              <h3>My Favorite Genres:</h3>
              <ul>
                {user.genres?.map((elem) => (
                  <li key={elem._id}>{elem}</li>
                ))}
              </ul>
              <h3>Casual or Competitive:</h3>
              <p>{user.competitive ? "Casual" : "Competitive"}</p>
              <h3>Solo or Co-Op:</h3>
              <p> {user.coOp ? "Solo" : "Co-Op"}</p>

              <button onClick={handleAddFriend}>Add Friend</button>
            </div>
          ) : (
            <div>
              {/* This is your profile */}

              {renderPage()}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

