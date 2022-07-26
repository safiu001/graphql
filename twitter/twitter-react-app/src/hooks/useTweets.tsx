import { gql, useQuery } from "@apollo/client";

const GET_TWEETS = gql`
  query {
    Tweets {
      id
      body
      date
    }
  }
`;

export const useTweets = () => {
  const { error, loading, data, refetch } = useQuery(GET_TWEETS);
  return {
    error,
    loading,
    data,
    refetch,
  };
};
