import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// import { QUERY_FRIENDS, QUERY_ME } from "../../utils/queries";
// import { useQuery } from "@apollo/client";
import { Container, ListGroup } from "react-bootstrap";
import { DELETE_FRIEND } from "../../utils/mutations";
// import { Navigate, useParams } from "react-router-dom";
import { GrFormTrash } from "react-icons/gr"

const FriendList = (props) => {
  const [deleteFriend, { error }] = useMutation(DELETE_FRIEND);
  const handleDeleteFriend = (friendId) => {
    const friendToDelete = props.friends.find(
      (friend) => friend._id === friendId
    );
    if (friendToDelete) {
      deleteFriend({ variables: { friendId: friendToDelete._id } })
        .then(() => {
          window.location.reload();
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <Container>
      <div>
        <div className="favorites0">
          <div className="favorites1">
            <h3>Your Friends: {props.friends.length}</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="favorites0">
          {props.friends.length === 0 ? (
            <p className="favorites1">You have no friends yet.</p>
          ) : (
            <ListGroup>
              {props.friends.map((friend, i) => (
                <ListGroup.Item
                  className="friends-card"
                  key={`friend-list-${i}`}
                >
                  <a
                    className="friend-list"
                    href={`/profiles/${friend.username}`}
                  >
                    {friend.username}
                  </a>{" "}
                  <button
                    className="friend-btn btn"
                    onClick={() => handleDeleteFriend(friend._id)}
                  >
                    <GrFormTrash className="trash-icon"/>
                  </button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </div>
      </div>
    </Container>
  );
};
export default FriendList;
