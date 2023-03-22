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
import Accordion from "react-bootstrap/Accordion";
import NavDropdown from "react-bootstrap/NavDropdown";

const Profile = () => {
// -------------userParam----------------  
  const { username: userParam } = useParams();
  console.log("userParam", userParam);

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

// -------------Bring Console Icons----------------
  const consoleIcons = {
    Playstation: <SiPlaystation />,
    Xbox: <SiXbox />,
    Nintendo: <SiNintendoswitch />,
    PC: <FaMouse />,
  };


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

  return (
    <div>
      <div>
        <h2 className="col-12 question-form p-3 mb-2">
          {userParam
            ? `You are currently viewing ${user.username}'s Profile ${user._id}`
            : `Hi ${user.username}!`}{" "}
          {user.favoriteConsole?.map((elem) => consoleIcons[elem])}
{/* 
          // -------------Drop-down underneath Name----------------           */}
          <NavDropdown title="User Preferences" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <div className="prof-accordian-body">
                <h3>Favorite Consoles:</h3>
                <p>{user.favoriteConsole?.map((elem) => consoleIcons[elem])}</p>
                <h3>Favorite Genres:</h3>
                <ul>
                  {user.genres?.map((elem) => (
                    <li key={elem._id}>{elem}</li>
                  ))}
                </ul>
                <h3>Casual or Competitive:</h3>
                <p>{user.competitive ? "Casual" : "Competitive"}</p>
                <h3>Solo or Co-Op:</h3>
                <p> {user.coOp ? "Solo" : "Co-Op"}</p>
              </div>
            </NavDropdown.Item>
          </NavDropdown>
        </h2>

        <div className="col-12 col-md-10 mb-5">
          {/* ------------- */}

          {userParam ? (
            <div>
              This is someone elses profile
              <button onClick={handleAddFriend}>Add Friend</button>
            </div>
          ) : (
            <div className="prof-accordian">
              {/* // -------------Nested Inside Accordian---------------- */}
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Friends List</Accordion.Header>
                  <Accordion.Body>
                    <FriendList friends={friends} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Post Stuff</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      Put Post Stuff Here
                      <li>Post Stuff</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Comment Stuff</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      Put Comment Stuff Here
                      <li>Comment Stuff</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>




              {/* // -------------Optional Components---------------- */}
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
