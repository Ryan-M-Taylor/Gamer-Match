// import { Link } from 'react-router-dom';
// import { ADD_FRIEND } from '../../utils/mutations';
// import { ADD_USER_FRIEND, QUERY_ME } from '../../utils/queries';
// import Auth from '../../utils/auth';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { QUERY_FRIENDS, QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Container, ListGroup } from 'react-bootstrap';
import { DELETE_FRIEND } from "../../utils/mutations";
// import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { Navigate, useParams } from "react-router-dom";
// import Auth from "../utils/auth";




const FriendList = (props) => {
  

    
    const [deleteFriend, { error }] = useMutation(DELETE_FRIEND);


  const handleDeleteFriend = () => {
    {props.friends.map((friend,i) => {
      let userId = friend._id 
      // let username = friend.username
    return deleteFriend({variables: {friendId: userId }});}
    )}

    // deleteFriend({variables: {friendId: userId }})
  };


  return (
    <Container>
      <div>
        <h3>Your Friends: {props.friends.length}</h3>
        {props.friends.length === 0 ? (
          <p>You have no friends yet.</p>
        ) : (
          <ListGroup>
            {props.friends.map((friend,i) => 
              <ListGroup.Item key={`friend-list-${i}`}><a href={`/profiles/${friend.username}`}>{friend.username}</a> <button onClick={handleDeleteFriend}>{friend.username}{friend._id}Delete Friend</button></ListGroup.Item>
            )}
          </ListGroup>
        )}
      </div>
    </Container>
  );
};

export default FriendList;

