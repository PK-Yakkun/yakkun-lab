import { Box } from "@/components/atoms/Box/Box";

export type ScreenProps = {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};

export const Screen = (props: ScreenProps) => {
  return (
    <Box
      onClick={() => props.setIsOpen!(!props.isOpen)}
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
