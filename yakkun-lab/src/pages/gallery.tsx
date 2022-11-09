import { Box } from "@/components/atoms/Box/Box";
import { Grid } from "@/components/atoms/Grid/Grid";
import { GridItem } from "@/components/atoms/GridItem/GridItem";
import { Typography } from "@/components/atoms/Typography/Typography";
import { GalleryGridItem } from "@/components/molecules/GalleryGridItem/GalleryGridItem";
import { Head } from "@/components/organisms/Head/Head";
import type { NextPage } from "next";
import Link from "next/link";

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
          bgSize="cover"
          bgPosition="center"
        >
          <Link href="/" passHref>
            <Box display="block" h="100%" />
          </Link>
        </GalleryGridItem>
        <GalleryGridItem
          gridColumn={{ sm: "8 span", md: "6 span" }}
          gridRow={{ sm: "4 span", md: "5 span" }}
          imagePath="yuis.png"
          bgSize="cover"
          bgPosition="center"
        >
          <a href="https://github.com/PK-Yakkun/YUIS" target="blank">
            <Box display="block" h="100%" />
          </a>
        </GalleryGridItem>
      </Grid>
    </>
  );
};

export default Gallery;
