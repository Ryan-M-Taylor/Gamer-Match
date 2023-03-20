import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { QUERY_FRIENDS, QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { Container, ListGroup } from "react-bootstrap";
import { DELETE_FRIEND } from "../../utils/mutations";
import { Navigate, useParams } from "react-router-dom";
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
        <h3>Your Friends: {props.friends.length}</h3>
        {props.friends.length === 0 ? (
          <p>You have no friends yet.</p>
        ) : (
          <ListGroup>
            {props.friends.map((friend, i) => (
              <ListGroup.Item key={`friend-list-${i}`}>
                <a href={`/profiles/${friend.username}`}>{friend.username}</a>{" "}
                <button onClick={() => handleDeleteFriend(friend._id)}>
                  Delete Friend
                </button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    </Container>
  );
};
export default FriendList;