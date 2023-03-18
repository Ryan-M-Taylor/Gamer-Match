import './App.css';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

import MyNavbar from './components/Navbar';
import FriendList from './components/FriendList';

import Profile from './components/Profile';
import Header from './components/Header';
// import Footer from './components/Footer';
import Questions from './components/Questions';
import Nintendo from './components/Nintendo';
import Playstation from './components/Playstation';
import Xbox from './components/Xbox';
import PC from './components/Pc';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <MyNavbar />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              
              <Route
                path="/questions"
                element={<Questions />}
              />
              <Route
                path="/me"
                element={<Profile />}
              />
              <Route
                path="/profiles/:username"
                element={<Profile />}
              />
              <Route
                path="/friendlist"
                element={<FriendList />}
              />
                <Route
                path="/playstation"
                element={<Playstation />}
              />
                    <Route
                path="/xbox"
                element={<Xbox />}
              />
                    <Route
                path="/nintendo"
                element={<Nintendo />}
              />
                    <Route
                path="/pc"
                element={<PC />}
              />
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
