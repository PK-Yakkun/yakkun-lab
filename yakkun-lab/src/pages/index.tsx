import { ArrowDownIcon } from "@/components/atoms/Icons/ArrowDownIcon";
import { Stack } from "@/components/atoms/Stack/Stack";
import { Typography } from "@/components/atoms/Typography/Typography";
import { Accordion } from "@/components/organisms/Accordion/Accordion";
import { NormalTemp } from "@/components/templetes/NormalTemp/NormalTemp";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <NormalTemp>
      <Typography variant="title" mb={2}>
        Yakkun Lab
      </Typography>
      <Typography variant="h2" mb={{ sm: 10, md: 10 }}>
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
      <Typography variant="h3" mt={10}>
        About
      </Typography>
      <Typography variant="body" mt={2} mb={4}>
        アプリアイコンがメニューになっています。
        <br />
        ギャラリーやUIライブラリを開いたり開かなかったりできます。
        また、ナイトモードに切り替えたり切り変えなかったりもできます。
      </Typography>
      <Accordion />
      <Typography variant="h3" mt={10}>
        Contact
      </Typography>
      <Typography variant="body" mt={2}>
        制作などのご依頼はTwitterのDMでお願いいたします。
        <br />
        画面下のメニュー内、Twitterアイコンよりアクセスできます。
      </Typography>
    </NormalTemp>
  );
};

export default Home;
