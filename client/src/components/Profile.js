import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Questions from './Questions';
// import ThoughtForm from '../components/ThoughtForm';
// import ThoughtList from '../components/ThoughtList';
import video from "./video.mp4"
import helmet2 from "./helmet2.png"

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();
  console.log("userParam", userParam);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log("user", user)
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!user?.username) why doesn't 
  if (user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

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
      {/* <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          Insert component here
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            Insert another component here
          </div>
        )}
      </div> */}

{/* ------------------EXPERIMENTAL CODE BENEATH------------------- */}

<div className='start-helmet'>

{/* <div id="helmet"> */}
{/* <img id="helmet" src={helmet2} alt="Logo" /> */}
    
</div>

<div className='profile-content'>

<div className='friend-list-container'> 
  <p>Your Friends</p>
  <ul>  
  </ul>
</div>

</div>

{/* <video autoplay muted loop id="myVideo" src={video} type="video/mp4">
    <source src={video} autoplay muted loop type="video/mp4"/>
    Your browser does not support HTML5 video.
  </video> */}

{/* </div> */}
{/* ------------------EXPERIMENTAL CODE ABOVE------------------- */}



    </div>

  );
};

export default Profile;
