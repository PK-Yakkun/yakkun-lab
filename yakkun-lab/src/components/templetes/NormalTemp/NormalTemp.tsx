import { Box } from "@/components/atoms/Box/Box";
import styled from "@emotion/styled";

export const WrapperStyled = styled.div(
  ({ theme }) => `background: ${theme.color.body};`
);

export type NormalTempProps = {
  children: React.ReactNode;
};

export const NormalTemp = ({ children }: NormalTempProps) => {
  return (
    <WrapperStyled>
      <Box
        maxW="1000px"
        mx="auto"
        pt={{ sm: 16, md: 20 }}
        px={{ sm: 4, md: 8 }}
        pb={{ sm: 14, md: 24 }}
      >
        {children}
      </Box>
    </WrapperStyled>
  );
};
