import { Box } from "@/components/atoms/Box/Box";
import { useEffect, useState } from "react";

type ContributionCalendarProps = {
  data: any;
};

export const ContributionCalendar = ({ data }: ContributionCalendarProps) => {
  const [weeks, setWeeks] = useState<any>();
  const [contributionDays, setContributionDays] = useState<any>();
  useEffect(() => {
    (async () => {
      console.log(data);
      await setWeeks(
        data!.data!.user!.contributionsCollection!.contributionCalendar!.weeks
      );
      console.log("weeks", weeks);
      weeks!.map((item: any) => {
        setContributionDays(item);
        item.contributionDays.map((a: any) => {
          console.log(a);
        });
        console.log("item", item);
      });
    })();
  }, [data, weeks]);

  return (
    contributionDays && (
      <>
        <Box>a</Box>
        {weeks!.map((index: number, item: any) => {
          item.contributionDays!.map((index: number, data: any) => {
            <Box key={index}>{data.date}</Box>;
          });
        })}
        <Box>b</Box>
      </>
    )
  );
};
