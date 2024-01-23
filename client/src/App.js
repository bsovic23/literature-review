import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink  } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// middleware fx essentially used to grab token, combine with httplink
import { setContext } from '@apollo/client/link/context';

// Imported Pages
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Project from './pages/Project';
import SignUp from './pages/SignUp';
import AddProject from './pages/AddProject';
import Contact from './pages/Contact';
import Stats from './pages/Stats';
import SingleLitEntry from './pages/SingleLitEntry';

// Application
function App() {
  const httpLink = createHttpLink ({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route
            path="/"
            element={<LandingPage />}
            />
              <Route
            path="/home"
            element={<Home />}
            />
            <Route
            path="/login"
            element={<Login />}
            />
            <Route
            path="/signup"
            element={<SignUp />}
            />
            <Route
            path="/single-entry"
            element={<SingleLitEntry />}
            />
            <Route
            path="/project"
            element={<Project />}
            />
            <Route
            path="/addproject"
            element={<AddProject />}
            />
            <Route
            path="/contact"
            element={<Contact />}
            />
              <Route
            path="/stats"
            element={<Stats />}
            />
            <Route path="/profile">
              <Route path=":username" element={<Profile />} />
              <Route path="" element={<Profile />} />
            </Route>
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
        </div>
      </Router>  
    </ApolloProvider>
  );
}

export default App;
