// import React from 'react';
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import React from "react";
// import PostList from "./PostList";


import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";
import FriendList from "./FriendList";

// -------------Optional Components----------------
import ProfileNav from "./Profile/ProfileNav"; 
import ProfileFriends from "./Profile/ProfileFriends"; 
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

  const [addFriend, { error }] = useMutation(ADD_FRIEND);

  const handleAddFriend = () => {
    console.log("USER ID!!!!!!!!" + userId);
    console.log("USER NAME!!!!!!" + userParam);
    addFriend({ variables: { friendId: userId } });
  };

  // -------------Add Friend Logic above ----------------

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
        <h2 className="col-12 col-md-10 question-form p-3 mb-5">
          {userParam
            ? `You are currently viewing ${user.username}'s Profile ${user._id}`
            : `Hi ${user.username}!`}
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
        {userParam
          ? `You are currently viewing ${user.username}'s Profile ${user._id}`
          : `Hi ${user.username}!`}{" "}
        <ul>
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
        <p> Solo or Co-Op : {user.coOp ? "Solo" : "Co-Op"}</p>
        <div className="col-12 col-md-10 mb-5">
          {/* ------------- */}

          {userParam ? (
            <div>
              This is someone elses profile
              <button onClick={handleAddFriend}>Add Friend</button>
            </div>
          ) : (
            <div>
              This is your profile

              {/* // -------------Optional Components---------------- */}
              <ProfileFriends />
               {/* // -------------Optional Components---------------- */}




              <FriendList friends={friends} />
              <div>
                {/* <h1>Hello, {user.username}!</h1> */}
                {/* <h2>Your Friends:</h2> */}

                {/* <ul>
                      {user.userFriends?.map((friend, i) => (
                        <li key={`friend-${friend._id}-${i}`}>{friend.username}</li>
                      ))}
                    </ul> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

// Experimental Code

// {userParam && Auth.loggedIn() ? (
//   <div>
//     This is someone elses profile
//     <button onClick={handleAddFriend}>Add Friend</button>
//   </div>
// ): (
//   <div>
//     This is your profile
//     <FriendList friends={friends} />
//     <div className="start-helmet">
//       <div className="profile-content">
//         <div>
//           {/* <h1>Hello, {user.username}!</h1> */}
//           {/* <h2>Your Friends:</h2> */}

//           {/* <ul>
//             {user.userFriends?.map((friend, i) => (
//               <li key={`friend-${friend._id}-${i}`}>{friend.username}</li>
//             ))}
//           </ul> */}
//           <div>{friends.length}</div>

//         </div>
//       </div>
//     </div>
//   </div>
// )}

// {isAuthenticated ? (
//   <p>Welcome back!</p>
// ) : (
//   isLoggingIn ? (
//     <p>Please wait while we log you in...</p>
//   ) : (
//     <p>Please log in.</p>
//   )
// )}

// Orginal code below----------------------------------

// {userParam ? (
//   <div>
//     This is someone elses profile
//     <button onClick={handleAddFriend}>Add Friend</button>
//   </div>
// ) : (
//   <div>
//     This is your profile
//     <FriendList friends={friends} />
//     <div className="start-helmet">
//       <div className="profile-content">
//         <div>
//           {/* <h1>Hello, {user.username}!</h1> */}
//           {/* <h2>Your Friends:</h2> */}

//           {/* <ul>
//             {user.userFriends?.map((friend, i) => (
//               <li key={`friend-${friend._id}-${i}`}>{friend.username}</li>
//             ))}
//           </ul> */}
//           <div>{friends.length}</div>

//         </div>
//       </div>
//     </div>
//   </div>
// )}
