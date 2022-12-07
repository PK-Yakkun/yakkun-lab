import { Box } from "@/components/atoms/Box/Box";
import { Grid } from "@/components/atoms/Grid/Grid";
import { GridItem } from "@/components/atoms/GridItem/GridItem";
import { Typography } from "@/components/atoms/Typography/Typography";
import { Accordion } from "@/components/organisms/Accordion/Accordion";
import { Head } from "@/components/organisms/Head/Head";
import { useContributions } from "@/hooks/useContributes";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [myContributes, setMyContributes] = useState<any>();
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
    <>
      <Head title="Home" />
      <Typography variant="title" mb={2}>
        Yakkun Lab
      </Typography>
      <Typography variant="h2" mb={{ sm: 6, md: 10 }}>
        Frontend and Design
      </Typography>

      {/* Profile */}
      <Typography variant="h3" pt={6}>
        Profile
      </Typography>
      <Typography variant="body" mt={2}>
        やっくんです。
        <br />
        フロントエンドやWebデザインをやったりやってなかったりしています。
        <br />
        Next.js, Typescriptをよく使います。
      </Typography>

      {/* GitHub contribute */}
      <Box
        maxW="636px"
        bgColor="secondary"
        p={{ sm: "18px", md: "24px" }}
        borderRadius={{ sm: "12px", md: "18px" }}
        my={4}
        mx="auto"
        overflowX="scroll"
      >
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
                  w={{ sm: "14px", md: "18px" }}
                  h={{ sm: "14px", md: "18px" }}
                  bg="#39D353"
                  borderRadius="4px"
                  opacity={createOpacity(count)}
                />
              </GridItem>
            ))}
          <Box mr={{ sm: "32px" }} />
        </Grid>
      </Box>

      {/* About */}
      <Typography variant="h3" mt={{ sm: 8, md: 10 }}>
        About
      </Typography>
      <Typography variant="body" mt={2} mb={4}>
        アプリアイコンがメニューになっています。
        <br />
        ギャラリーや各SNSを開いたり開かなかったりできます。
        <br />
        また、ナイトモードに切り替えたり切り替えなかったりもできます。
      </Typography>
      <Accordion />

      {/* Contact */}
      <Typography variant="h3" mt={{ sm: 8, md: 10 }}>
        Contact
      </Typography>
      <Typography variant="body" mt={2}>
        制作などのご依頼はTwitterのDMでお願いいたします。
        <br />
        画面下のメニュー内、Twitterアイコンよりアクセスできます。
      </Typography>
    </>
  );
};

// export const getServerSideProps = async () => {
//   const response = await fetch(
//     "http://localhost:3000/api/getContributes/PK-Yakkun"
//   );
//   const data = await response.json();
//   return {
//     props: { data },
//   };
// };

export default Home;
