import { Box } from "@/components/atoms/Box/Box";
import { Button } from "@/components/atoms/Button/Button";
import { ArrowDownIcon } from "@/components/atoms/Icons/ArrowDownIcon";
import { Stack } from "@/components/atoms/Stack/Stack";
import { Typography } from "@/components/atoms/Typography/Typography";
import { useEffect, useRef, useState } from "react";

export const Accordion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const refHeight = useRef<HTMLDivElement>(null);
  const [elmHeight, setElmHeight] = useState<number>(0);

  useEffect(() => {
    refHeight.current && setElmHeight(refHeight.current.clientHeight);
    console.log(elmHeight);
  }, []);

  return (
    <Box>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        display="block"
        pl={5}
        pr={4}
        borderRadius="50vw"
        mx="auto"
        bgColor="#88888833"
      >
        <Stack justifyContent="center" alignItems="center">
          <Typography mr={1}>さらに詳しく見る</Typography>
          <Stack
            alignItems="center"
            transform={isOpen ? "rotate(180deg)" : "rotate(0)"}
            transition="0.3s"
          >
            <ArrowDownIcon width="24px" viewBox="0 0 24 24" fill="typography" />
          </Stack>
        </Stack>
      </Button>
      <Box
        h={isOpen ? `${elmHeight}px` : "0px"}
        overflow="hidden"
        transition=".3s"
      >
        <div ref={refHeight}>
          <Box pt={4}>
            <ul>
              <li>
                <Typography>ライブラリ: React</Typography>
              </li>
              <li>
                <Typography>フレームワーク: Next.js（TypeScript）</Typography>
              </li>
              <li>
                <Typography>ホスティング: Vercel</Typography>
              </li>
              <li>
                <Typography>UIライブラリ: 自作</Typography>
              </li>
            </ul>
          </Box>
        </div>
      </Box>
    </Box>
  );
};
