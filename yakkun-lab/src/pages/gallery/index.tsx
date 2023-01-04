import { Box } from "@/components/atoms/Box/Box";
import { Grid } from "@/components/atoms/Grid/Grid";
import { Typography } from "@/components/atoms/Typography/Typography";
import { GalleryGridItem } from "@/components/molecules/GalleryGridItem/GalleryGridItem";
import { Head } from "@/components/organisms/Head/Head";
import type { NextPage } from "next";

const Gallery: NextPage = () => {
  return (
    <>
      <Head title="Gallery" />
      <Typography variant="h1" mb={6}>
        Gallery
      </Typography>
      <Grid
        gridAutoRows="22px"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="20px"
      >
        <GalleryGridItem
          gridColumn={{ sm: "12 span", md: "6 span" }}
          gridRow={{ sm: "4 span", md: "5 span" }}
          imagePath="colorful_karafuru.jpg"
        />
        <GalleryGridItem
          gridColumn={{ sm: "12 span", md: "6 span" }}
          gridRow={{ sm: "4 span", md: "5 span" }}
          imagePath="yuis.png"
          bgSize="100%"
          bgPosition="center"
        >
          <a href="https://github.com/PK-Yakkun/YUIS" target="blank">
            <Box display="block" h="100%" />
          </a>
        </GalleryGridItem>
        <GalleryGridItem
          gridColumn={{ sm: "6 span", md: "4 span" }}
          gridRow={{ sm: "4 span", md: "6 span" }}
          imagePath="darumasanga_momonga.png"
        />
        <GalleryGridItem
          gridColumn={{ sm: "6 span", md: "4 span" }}
          gridRow={{ sm: "4 span", md: "6 span" }}
          imagePath="kuma_no_mimi.jpg"
        />
        <GalleryGridItem
          gridColumn={{ sm: "6 span", md: "4 span" }}
          gridRow={{ sm: "4 span", md: "6 span" }}
          imagePath="yadokari.jpg"
        />
        <GalleryGridItem
          gridColumn={{ sm: "6 span", md: "4 span" }}
          gridRow={{ sm: "4 span", md: "6 span" }}
          imagePath="moshi_moshi.jpg"
        />
        <GalleryGridItem
          gridColumn={{ sm: "12 span", md: "8 span" }}
          gridRow={{ sm: "4 span", md: "6 span" }}
          imagePath="ika-ri.png"
        />
        <GalleryGridItem
          gridColumn={{ sm: "6 span", md: "8 span" }}
          gridRow={{ sm: "4 span", md: "7 span" }}
          imagePath="kirby_mirror.png"
        />
        <GalleryGridItem
          gridColumn={{ sm: "6 span", md: "4 span" }}
          gridRow={{ sm: "4 span", md: "7 span" }}
          imagePath="scuba_dining.png"
        />
        <GalleryGridItem
          gridColumn={{ sm: "12 span", md: "6 span" }}
          gridRow={{ sm: "4 span", md: "5 span" }}
          imagePath="todo_light.png"
          bgSize="50%"
          bgPosition="center"
        >
          <a
            href="https://github.com/PK-Yakkun/todo-light/blob/develop/README.md"
            target="blank"
          >
            <Box display="block" h="100%" />
          </a>
        </GalleryGridItem>
        大阪市阿倍野区天王寺町南3-8-30 南海グランドコート阿倍野 504号
      </Grid>
    </>
  );
};

export default Gallery;
