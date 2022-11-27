import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const githubData = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
  cache: new InMemoryCache(),
});

export const GET_CURRENT_USER = gql`
  query {
    user(login: "PK-Yakkun") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;
