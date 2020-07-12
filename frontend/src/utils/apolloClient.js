import ApolloClient from "apollo-client";
import { ApolloLink } from 'apollo-link';
import { onError } from "apollo-link-error";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import tokenStorage from './tokenStorage'

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL
});

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_GRAPHQL_WS_URL,
  options: {
    reconnect: true
  }
});

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: tokenStorage.write
    }
  });
  return forward(operation);
});

const errorLink = onError(({ networkError }) => {
  if (networkError.statusCode === 401) {
    // logout();
  }
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  middlewareLink.concat(errorLink.concat(wsLink)),
  middlewareLink.concat(httpLink),
);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

export default client;
