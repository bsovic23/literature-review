import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, creatteHttpLink } from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

function App() {
  const httpLink = creatteHttpLink({
    uri: 'http://localhost:3001/graphql',
  });

  const client = newApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <div>
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
