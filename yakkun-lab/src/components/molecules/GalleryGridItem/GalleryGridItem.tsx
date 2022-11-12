import { GridItem, GridItemProps } from "@/components/atoms/GridItem/GridItem";

export type GalleryGridItemProps = Partial<GridItemProps> & {
  children?: React.ReactNode;
  imagePath?: string;
};

export const GalleryGridItem = (props: GalleryGridItemProps) => {
  return (
    <GridItem
      {...props}
      boxShadow="0 6px 8px rgba(0, 0, 0, 0.15)"
      borderRadius="12px"
      bg={`url(/images/gallery/${props.imagePath}) no-repeat`}
      hover={{ backgroundSize: "104%", opacity: ".8" }}
      transition=".5s"
    >
      {props.children}
    </GridItem>
  );
};
