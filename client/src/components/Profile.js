// import React from 'react';
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import Auth from "../utils/auth.js";
import { QUERY_USER, QUERY_ME } from "../utils/queries";

// import Auth from "../utils/auth";
import FriendList from "./FriendList";
import { ADD_FRIEND } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { SiPlaystation, SiNintendoswitch, SiXbox } from "react-icons/si";
import { FaMouse } from "react-icons/fa";
import { Link } from "react-router-dom";

// -------------Optional Components----------------
import ProfileNav from "./Profile/ProfileNav";
// -------------Optional Components----------------

const Profile = () => {
  const { username: userParam } = useParams();
  // console.log("userParam", userParam);

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // console.log(user);
  // console.log(user.genres);

  const userId = user._id;
  const friends = user.userFriends;
  const posts = user.posts;
  const consoleIcons = {
    Playstation: <SiPlaystation />,
    Xbox: <SiXbox />,
    Nintendo: <SiNintendoswitch />,
    PC: <FaMouse />,
  };
  const consoles = {
    Playstation: 'Playstation',
    Xbox: 'Xbox',
    Nintendo: 'Nintendo',
    PC: 'PC'
  }

  const [addFriend, { error }] = useMutation(ADD_FRIEND);
  
  const handleAddFriend = () => {
    // console.log("USER ID!!!!!!!!" + userId);
    // console.log("USER NAME!!!!!!" + userParam);
    addFriend({ variables: { friendId: userId } });
  };

  const [currentPage, setCurrentPage] = useState("Profile");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.

if(!Auth.loggedIn()){

}

  const renderPage = () => {
    let result = null;

    switch (currentPage) {
      case "Profile":
        result = (
          <div className="border p-4">
            <h3 className="favorites">My Favorite Genres:</h3>
            <ul>
              {user.genres?.map((elem) => (
                <li key={elem._id}>{elem}</li>
              ))}
            </ul>
            <h3 className="favorites">Playstyle:</h3>
            <p className="text-center">{user.competitive ? "Casual" : "Competitive"}</p>
            <h3 className="favorites">Solo or Co-Op:</h3>
            <p className="text-center"> {user.coOp ? "Solo" : "Co-Op"}</p>
          </div>
        );
        break;
      case "Friends":
        // console.log("friends", friends);
        result = (<FriendList friends={friends} />);
        break;
      case "Posts":
        result = (
          <div>
            {posts &&
              posts.map((post) => (
                <div key={post._id} className="card post-border mb-3 ">
                  <h4
                    className={`card-header ${post.postChannel}-form p-2 m-0`}
                  >
                    {post.postAuthor} <br />
                    <span style={{ fontSize: "1rem" }}>
                      posted on {post.createdAt} to {post.postChannel}
                    </span>
                  </h4>
                  <div className="card-body p-2 text-center">
                    <p>{post.postText}</p>
                  </div>
                  <Link
                  className={`btn btn-block btn-squared ${post.postChannel}-form m-0`}
                    to={`/posts/${post._id}`}
                  >
                    Join the discussion on this thread.
                  </Link>
                </div>
              ))}
          </div>
        );
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
        result = <div>Use the menu to explore your profile!</div>;
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

  // console.log("favoriteconsolelist", user);
  return (
    // <div>
    //   <div className="flex-row justify-center mb-3">
    //     <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
    //       Viewing {userParam ? `${user.username}'s` : 'your'} profile.
    //     </h2>

    //     <div className="col-12 col-md-10 mb-5">
    //       Insert component here
    //     </div>
    //     {!userParam && (
    //       <div
    //         className="col-12 col-md-10 mb-3 p-3"
    //         style={{ border: '1px dotted #1a1a1a' }}
    //       >
    //         Insert another component here
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div>
      <div className="d-flex flex-column align-items-center">
        <h2 className="col-12 col-md-10 p-3 mb-2 text-center prof-header">
          {userParam ? `${user.username}'s Profile` : `${user.username}`}{' '}
          {user.favoriteConsole?.map((elem) => <span className={`${consoles[elem]}-icon`}>{consoleIcons[elem]} </span>)}
        </h2>
        {!userParam ? (
          <div className="d-flex flex-column align-items-center">
            <ProfileNav
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        ) : (
          <div></div>
        )}

        <div className="col-12 col-md-10 mb-5">
          {userParam ? (
            <div>
              {/* This is someone elses profile */}
              <h3 className="favorites">My Favorite Genres:</h3>
              <ul>
                {user.genres?.map((elem) => (
                  <li key={elem._id}>{elem}</li>
                ))}
              </ul>
              <h3 className="favorites">Casual or Competitive:</h3>
              <p className="text-center">{user.competitive ? "Casual" : "Competitive"}</p>
              <h3 className="favorites">Solo or Co-Op:</h3>
              <p className="text-center"> {user.coOp ? "Solo" : "Co-Op"}</p>
              <div className="d-flex justify-content-center">
              { !Auth.loggedIn() ? (<button className='btn friend-btn'><a href= "/login" style={{color : "white"}}>Login To Add Friend!</a></button>) : (<button className='btn friend-btn' onClick={handleAddFriend}>Add Friend</button>)}
              </div>
            </div>
          ) : (
            <div>
              {renderPage()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
