import { GridItem, GridItemProps } from "@/components/atoms/GridItem/GridItem";
import { EventClickType } from "@/types/events";

export type GalleryGridItemProps = Partial<GridItemProps> &
  Partial<EventClickType> & {
    children?: React.ReactNode;
    imagePath?: string;
  };

export const GalleryGridItem = (props: GalleryGridItemProps) => {
  return (
    <>
      <GridItem
        {...props}
        boxShadow="0 6px 8px rgba(0, 0, 0, 0.15)"
        borderRadius="12px"
        bg={`url(/images/gallery/${props.imagePath}) no-repeat`}
        bgPosition="center"
        bgSize="100%"
        hover={{
          backgroundSize: "104%",
          opacity: ".8",
          cursor: "pointer",
        }}
        transition=".5s"
      >
        {props.children}
      </GridItem>
    </>
  );
};
