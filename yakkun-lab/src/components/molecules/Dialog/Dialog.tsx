import { Box } from "@/components/atoms/Box/Box";
import { Button } from "@/components/atoms/Button/Button";
import { Screen } from "@/components/atoms/Screen/Screen";
import { useState } from "react";

export type DialogProps = {
  switchItem: React.ReactNode;
};

export const Dialog = ({ switchItem }: DialogProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Box onClick={() => setIsOpen(!isOpen)} display="block" w="100%" h="100%">
        {switchItem}
      </Box>
      <Box
        display={isOpen ? "block" : "none"}
        opacity={isOpen ? "1" : "0"}
        transition=".3s"
      >
        <Screen isOpen={isOpen} setIsOpen={setIsOpen} />
      </Box>
    </>
  );
};
