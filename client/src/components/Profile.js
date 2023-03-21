// import React from 'react';
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import React from "react";
import Auth from "../utils/auth";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import FriendList from "./FriendList";
import { ADD_FRIEND } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { SiPlaystation, SiNintendoswitch, SiXbox } from "react-icons/si";
import { FaMouse } from "react-icons/fa";

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

    if (!Auth.loggedIn()) {
      alert("Login to add people!");
    }
  };


  const consoleIcons = {
    Playstation: <SiPlaystation />,
    Xbox: <SiXbox />,
    Nintendo: <SiNintendoswitch />,
    PC: <FaMouse />,
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
    <div>
      <div>
        <h2 className="col-12 question-form p-3 mb-2">
          {userParam
            ? `You are currently viewing ${user.username}'s Profile ${user._id}`
            : `Hi ${user.username}!`}{' '}{user.favoriteConsole?.map((elem) => (consoleIcons[elem]))}

        </h2>
        <p>Favorite Genres:</p>
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