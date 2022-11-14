import { Box } from "@/components/atoms/Box/Box";
import { GridItem, GridItemProps } from "@/components/atoms/GridItem/GridItem";
import { EventClickType } from "@/types/events";
import { Screen } from "@/components/atoms/Screen/Screen";
import { useState } from "react";

export type GalleryGridItemProps = Partial<GridItemProps> &
  Partial<EventClickType> & {
    children?: React.ReactNode;
    imagePath?: string;
    isDialogItem?: boolean;
    dialogContents?: React.ReactNode;
  };

export const GalleryGridItem = (props: GalleryGridItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const a = () => {
    console.log("ok", isOpen);
    !setIsOpen;
  };
  return (
    <>
      <GridItem
        {...props}
        boxShadow="0 6px 8px rgba(0, 0, 0, 0.15)"
        borderRadius="12px"
        bg={`url(/images/gallery/${props.imagePath}) no-repeat`}
        hover={
          !isOpen && {
            backgroundSize: "104%",
            opacity: ".8",
            cursor: "pointer",
          }
        }
        transition=".5s"
        onClick={() => props.isDialogItem && setIsOpen(!isOpen)}
      >
        {props.children}
      </GridItem>
      {props.isDialogItem && (
        <Box display={isOpen ? "block" : "none"}>
          <Box position="fixed" mx="0" bg="#fff">
            {props.dialogContents}
          </Box>

          <Screen isOpen={isOpen} setIsOpen={setIsOpen} />
        </Box>
      )}
    </>
  );
};
