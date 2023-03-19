// import React from 'react';
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import Questions from "./Questions";
import React from "react";
// import PostList from "./PostList";


import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";
import FriendList from "./FriendList";

const Profile = () => {
  const { username: userParam } = useParams();
  console.log("userParam", userParam);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return (<Navigate to="/me"/>);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("user", user.username);
  // if (!user?.username) why doesn't
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

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
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
        {userParam ? `You are currently viewing ${user.username}'s Profile` : `Hi ${user.username}!`}
        </h2>

        <div className="col-12 col-md-10 mb-5">
          Insert component here
        <FriendList />
        </div>
        {userParam && (
    
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <button onClick={alert}>Add Friend</button>
          </div>
        )}
      </div>

      {/* ------------------EXPERIMENTAL CODE BENEATH------------------- */}

      <div className="start-helmet">
        <div className="profile-content">
        
         
        </div>
      </div>
    </div>
  );
};

export default Profile;
