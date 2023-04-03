import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink  } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// middleware fx essentially used to grab token, combine with httplink
import { setContext } from '@apollo/client/link/context';

// Imported Components
import Header from './components/Header';
import Footer from './components/Footer';

// Imported Pages
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Signup from './pages/Signup';
import AddProject from './pages/AddProject';

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
          <Header />
          <div>
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
              path="/project"
              element={<Project />}
              />
              <Route
              path="/addproject"
              element={<AddProject />}
              />
              <Route
                path="*"
                element={<NoMatch />}
              />
            </Routes>
            <Routes>
              <Route path="/profile">
                <Route path=":username" element={<Profile />} />
                <Route path="" element={<Profile />} />
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>  
    </ApolloProvider>
  );
}

export default App;
