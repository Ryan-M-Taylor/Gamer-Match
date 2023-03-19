import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FRIEND } from "../../utils/mutations";
import { QUERY_ME, QUERY_USER} from '../../utils/queries';
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";




const FriendAdd = (userId) => {
  
  // const { username: userParam } = useParams();
  // console.log("userParam", userParam);
  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });
  
  
  // const user = data?.me || data?.user || {};
  
  
  // const [friendName, setFriendName] = useState([]);
  const [addFriend, { error }] = useMutation(ADD_FRIEND);
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addFriend({ variables: { name: friendName } });
  //   setFriendName([]);
  // };


  const handleAddFriend = () => {
    addFriend({ variables: { _id: userId } });
  };
  
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
   
<div>
<button onClick={handleAddFriend}>Add Friend</button>
{error && <p>Error adding friend</p>}
</div>
  );
};

export default FriendAdd;