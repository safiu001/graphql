import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});

const authLink = setContext(async (_, { headers }) => {
  // const { getAccessTokenSilently } = useAuth0();
  const token = localStorage.getItem("token");
  console.log(token);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-sixfipj4.us.auth0.com"
      clientId="t03K7UZlapJpTOq1DdbAA9mw42sF6OkZ"
      redirectUri={window.location.origin}
    >
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Auth0Provider>
  </React.StrictMode>
);
