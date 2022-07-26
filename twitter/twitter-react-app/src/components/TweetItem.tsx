import {
  ApolloQueryResult,
  gql,
  OperationVariables,
  useMutation,
} from "@apollo/client";
import React from "react";
import { Tweet } from "../Model/Model";

type Props = {
  data: Tweet;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DELETE_TWEET = gql`
  mutation DeletTweet($id: ID!) {
    deleteTweet(id: $id) {
      id
      body
    }
  }
`;

const TweetItem = (props: Props) => {
  const date = new Date(props.data.date);

  const [deleteTweet] = useMutation(DELETE_TWEET, {
    variables: {
      id: props.data.id,
    },
  });
  return (
    <div className="flex-container">
      <div className="avatar-container">
        <img
          className="avatar"
          src="/twitter-avatar.png"
          alt="twitter-icon"
          height="80px"
          width="80px"
        />
      </div>
      <div className="tweet-body">
        <div className="tweet-head">
          <h3>User</h3>
          <span>
            {date.getDate() + " " + monthNames[date.getMonth()].slice(0, 3)}
          </span>
        </div>
        <p>{props.data.body}</p>
        <button
          onClick={() => {
            deleteTweet();
            props.refetch();
          }}
          className="delete-tweet-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TweetItem;
