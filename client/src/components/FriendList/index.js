// import { Link } from 'react-router-dom';
// import { ADD_FRIEND } from '../../utils/mutations';
// import { ADD_USER_FRIEND, QUERY_ME } from '../../utils/queries';
// import Auth from '../../utils/auth';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { QUERY_FRIENDS, QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Container, ListGroup } from 'react-bootstrap';

const FriendList = (props) => {
  // const { loading, error, data } = useQuery(QUERY_FRIENDS, {
  //   variables: { id: userId },
  // });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // const { name, friends } = data.user;
  console.log(props.friends)

  return (
    <Container>
      <div>
        <h3>Friends:</h3>
        {props.friends.length === 0 ? (
          <p>You have no friends yet.</p>
        ) : (
          <ListGroup>
            {props.friends.map((friends) => {
              return React.createElement(ListGroup.Item, { key: props.friends._id }, props.friends.username);
            })}
          </ListGroup>
        )}
      </div>
    </Container>
  );
};

export default FriendList;

