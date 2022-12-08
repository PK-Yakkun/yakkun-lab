import { Box } from "@/components/atoms/Box/Box";
import { Typography } from "@/components/atoms/Typography/Typography";
import { Accordion } from "@/components/organisms/Accordion/Accordion";
import { Contributions } from "@/components/organisms/Contributions";
import { Head } from "@/components/organisms/Head/Head";
import type { NextPage } from "next";

const Home: NextPage = () => {
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
        Next.js, Typescriptをよく使います。UI・デザイン設計が得意です。
      </Typography>

      {/* GitHub contribute */}
      <Box mt={{ sm: 8, md: 10 }}>
        <Contributions />
        <Typography variant="caption" display="block" textAlign="center" mt={1}>
          直近6ヶ月間のContributes
        </Typography>
      </Box>

      {/* About */}
      <Typography variant="h3" mt={{ sm: 8, md: 10 }}>
        About
      </Typography>
      <Typography variant="body" mt={2} mb={4}>
        やっくんのポートフォリオサイトです。
        <br />
        アプリアイコンがメニューになっており、ギャラリーや各SNSを開いたり開かなかったりできます。
        <br />
        また、ナイトモードに切り替えたり切り替えなかったりもできます。
      </Typography>
      {/* 詳細 */}
      <Accordion />

      {/* Contact */}
      <Typography variant="h3" mt={{ sm: 8, md: 10 }}>
        Contact
      </Typography>
      <Typography variant="body" mt={2}>
        制作などのご依頼はTwitterのDMよりお願いいたします。
        <br />
        画面下のメニュー内、Twitterアイコンからアクセスすることができます。
      </Typography>
    </>
  );
};

export default Home;
