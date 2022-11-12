import { Typography } from "@/components/atoms/Typography/Typography";
import { Stack } from "@/components/atoms/Stack/Stack";
import { Box } from "@/components/atoms/Box/Box";

export const Footer = () => {
  return (
    <Box as="footer" w="100%" bgColor="secondary">
      <Stack justifyContent="center" pt={1} pb={18}>
        <Typography variant="caption">Development by Yakkun.</Typography>
      </Stack>
    </Box>
  );
};
