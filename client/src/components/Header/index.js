import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
  //   <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
  //     <div className="container flex-row justify-space-between-lg justify-center align-center">
  //       <div>
  //         <Link className="text-light" to="/">
  //           <h1 className="m-0">Gamer Match</h1>
  //         </Link>
  //         <p className="m-0">Link up with fellow gamers</p>
  //       </div>
  //       <div>
  //         {Auth.loggedIn() ? (
  //           <>
  //             <Link className="btn btn-lg btn-info m-2" to="/me">
  //               {Auth.getProfile().data.username}'s profile
  //             </Link>
  //             <button className="btn btn-lg btn-light m-2" onClick={logout}>
  //               Logout
  //             </button>
  //           </>
  //         ) : (
  //           <>
  //             <Link className="btn btn-lg btn-info m-2" to="/login">
  //               Login
  //             </Link>
  //             <Link className="btn btn-lg btn-light m-2" to="/signup">
  //               Signup
  //             </Link>
  //           </>
  //         )}
  //         <Navigation />
  //       </div>
  //     </div>
  //   </header>
  // );








  <header className="header-div">
      <div className="">
        <div className='app-name'>
          <Link className="" to="/">
            <h1 className="">Gamer Match</h1>
          </Link>
        </div>
        <div>
          <p className="description">Link up with fellow gamers</p>
          </div>
        <div className='login-and-signup-btn'>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2 login" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2 signup" to="/signup">
                Signup
              </Link>
            </>
          )}
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
