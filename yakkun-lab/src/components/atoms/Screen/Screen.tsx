import { Box } from "@/components/atoms/Box/Box";

export type ScreenProps = {
  isShow?: boolean;
  setIsOpen?: (isShow: boolean) => void;
};

export const Screen = (props: ScreenProps) => {
  return (
    <Box
      onClick={() => props.setIsOpen!(!props.isShow)}
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      bg="#000000e6"
      zIndex="20"
    />
  );
};
