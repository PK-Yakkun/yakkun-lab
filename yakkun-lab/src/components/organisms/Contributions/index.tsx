import { Box } from "@/components/atoms/Box/Box";
import { Grid } from "@/components/atoms/Grid/Grid";
import { GridItem } from "@/components/atoms/GridItem/GridItem";
import { useContributions } from "@/hooks/useContributes";
import { MyContributes } from "@/pages/api/contributions/[userName]";
import { useState, useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";

export const Contributions = () => {
  const [myContributes, setMyContributes] = useState<MyContributes>();
  const { getContributions } = useContributions();

  useEffect(() => {
    (async () => {
      const data = await getContributions("PK-Yakkun");
      setMyContributes(data);
    })();
  }, []);

  /**
   * GitHubの草の色を決める関数
   * @param count APIで取得したコミット数
   * @returns opacityのCSS
   */
  const createOpacity = (count: number) => {
    let opacity;
    count === 0
      ? (opacity = "0")
      : 1 <= count && count <= 2
      ? (opacity = "0.2")
      : 3 <= count && count <= 6
      ? (opacity = "0.4")
      : 7 <= count && count <= 10
      ? (opacity = "0.6")
      : 11 <= count && count <= 13
      ? (opacity = "0.8")
      : 14 < count && (opacity = "1");

    return opacity;
  };

  return (
    <Box
      maxW="636px"
      bgColor="#000000bf"
      p={{ sm: "18px", md: "24px" }}
      borderRadius={{ sm: "12px", md: "18px" }}
      mx="auto"
      overflowX="scroll"
    >
      {myContributes ? (
        <Grid
          gridTemplateColumns="repeat(27, 1fr)"
          gridTemplateRows="repeat(7, 1fr)"
          gridAutoFlow="column"
          gap="4px"
        >
          {myContributes &&
            myContributes.values.map((count: number, index: number) => (
              <GridItem key={index}>
                <Box
                  w={{ sm: "14px", md: "16px" }}
                  h={{ sm: "14px", md: "16px" }}
                  bg="#39d353"
                  borderRadius="4px"
                  opacity={createOpacity(count)}
                />
              </GridItem>
            ))}
          <Box mr={{ sm: "32px" }} />
        </Grid>
      ) : (
        <MutatingDots
          color="#39d353"
          secondaryColor="#39d353"
          radius={12}
          width="100"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            padding: "3%",
          }}
        />
      )}
    </Box>
  );
};
