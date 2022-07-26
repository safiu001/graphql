import { gql, useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import "./App.css";
import TweetItem from "./components/TweetItem";
import { useTweets } from "./hooks/useTweets";
import { Tweet } from "./Model/Model";

const ADD_TWEET = gql`
  mutation AddTweet($body: String!) {
    createTweet(body: $body) {
      id
      date
      body
    }
  }
`;

function App() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const { error, loading, data, refetch } = useTweets();
  const [tweetBody, setTweetBody] = useState<string>("");
  const [addTweet] = useMutation(ADD_TWEET, {
    variables: {
      body: tweetBody,
    },
  });

  if (error) return <div>Error{error.toString()}</div>;
  if (loading || isLoading) return <div>Loading......</div>;

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect();
  }

  return (
    <div className="App">
      <div className="twitter-header">
        <h1>Tweets</h1>
      </div>
      {data.Tweets.map((tweet: Tweet) => {
        return (
          <div key={tweet.id} className="main-item-container">
            <TweetItem data={tweet} refetch={refetch} />
          </div>
        );
      })}
      <div className="tweet-input">
        <input
          type="text"
          placeholder="Tweet anything"
          required
          value={tweetBody}
          onChange={(event) => setTweetBody(event.target.value)}
        />
        <button
          onClick={() => {
            addTweet();
            setTweetBody("");
            refetch();
          }}
        >
          Add Tweet
        </button>
      </div>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </button>
    </div>
  );
}

export default App;
