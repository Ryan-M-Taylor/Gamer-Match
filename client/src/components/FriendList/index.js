import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_FRIEND } from '../../utils/mutations';
import { QUERY_FRIENDS, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
const FriendList = () => {
  const [friend, setFriend] = useState('');
  const [addFriend, { error }] = useMutation(ADD_FRIEND, {
    update(cache, { data: { addFriend } }) {
      try {
        const { friends } = cache.readQuery({ query: QUERY_FRIENDS });
        console.log("Post cache", cache.readQuery({ query: QUERY_FRIENDS }))
        cache.writeQuery({
          query: QUERY_FRIENDS,
          data: { friends: [addFriend, ...friends] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addFriend({
        variables: {
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    // const { name, value } = event.target;
  };
  return (
    <div>
      Friends list will go here
    </div>
  );
};
export default FriendList;