// import React from 'react';
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
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

  const userId = user._id;
  const friends = user.userFriends;

  const [addFriend, { error }] = useMutation(ADD_FRIEND);

  const handleAddFriend = () => {
    addFriend({ variables: { _id: userId } });
  };

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
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

  // ---------------------ADD FRIEND LOGIC BELOW-----------------------------------

  // const FriendAdd = (userId) => {

  //   // const { username: userParam } = useParams();
  //   // console.log("userParam", userParam);
  //   // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   //   variables: { username: userParam },
  //   // });

  //   // const user = data?.me || data?.user || {};

  //   return (
  //     // <div>
  //     //   <form onSubmit={handleSubmit}>
  //     //       {/* <input
  //     //         type="text"
  //     //         value={friendName}
  //     //         onChange={(e) => setFriendName(e.target.value)}
  //     //       /> */}
  //     //       <button
  //     //         type="submit"
  //     //         value={friendName}
  //     //         onSubmit={(e) => setFriendName(e.target.value)}
  //     //       >Add Friend</button>

  //     //     {/* <button type="submit">Add Friend</button> */}
  //     //   </form>
  //     //   {error && <p>Error adding friend</p>}
  //     // </div>

  // <div>
  // <button onClick={handleAddFriend}>Add Friend</button>
  // {error && <p>Error adding friend</p>}
  // </div>
  //   );
  // };

  // ----------------------ADD FRIEND LOGIC ABOVE------------------------------------



  // POSSIBLE BUTTON CODE

  
  const AddFriendButton = ({ userId, friendId }) => {
    const [addUserFriend] = useMutation(ADD_USER_FRIEND, {
      variables: { userId, friendId },
    });
  
    const handleAddFriend = () => {
      addUserFriend();
    };
  };

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
        <p>Competitive or Casual : {user.competitive ? "Casual" : "-Competetive"}</p>
        <p> Solo or Co-Op : {user.coOp ? "Solo" : "Co-Op"}</p>        
        <div className="col-12 col-md-10 mb-5">
          {/* ------------- */}

          {userParam ? (
            <div>
              This is someone elses profile
              <button onClick={handleAddFriend}>Add Friend</button>
            </div>
          ) : (
            <div>This is your profile
          <FriendList friends={friends} />

          <div className="start-helmet">
        <div className="profile-content">
          <div>
            <h1>Hello, {user.username}!</h1>
            <h2>Your Friends:</h2>

            <ul>
              {user.userFriends.map((friend) => (
                <li key={friend._id}>{friend.username}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
          </div>
          )}
        </div>
        {userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: "1px dotted #1a1a1a" }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Profile;
