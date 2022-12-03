import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/core";

export type Contributions = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: [
          {
            contributionDays: [
              {
                date: string;
                contributionCount: number;
              }
            ];
          }
        ];
      };
    };
  };
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { userName } = request.query;

  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  const query = `
    query contributions($userName: String!) {
      user(login: $userName) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const contributions = await octokit.graphql<Contributions>(query, {
    userName,
  });

  let contributionCount: number[] = [];

  contributions.user.contributionsCollection.contributionCalendar.weeks.forEach(
    (week) => {
      week.contributionDays.forEach((contributionDay) => {
        contributionCount.push(contributionDay.contributionCount);
      });
    }
  );

  return response.status(200).json({
    contributionCount,
  });
}
