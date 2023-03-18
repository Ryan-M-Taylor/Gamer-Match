import React from 'react';
  import { useMutation } from '@apollo/client';
  import { Button } from 'react-bootstrap';
  import { ADD_USER_FRIEND } from '../utils/mutations';
  // import { QUERY_FRIENDS } from '../utils/queries';
  
  const AddFriendButton = ({ userId, friendId }) => {
    const [addUserFriend] = useMutation(ADD_USER_FRIEND, {
      variables: { userId, friendId },
    });
  
    const handleAddFriend = () => {
      addUserFriend();
    };
  
    return (
      <Button variant="primary" onClick={handleAddFriend}>
        Add Friend
      </Button>
    );
  };
  
  export default AddFriendButton;


