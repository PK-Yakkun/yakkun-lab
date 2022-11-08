import { layoutMixin, LayoutProps } from "@/styles/mixins/layout";
import styled from "@emotion/styled";

type StyledDividerProps = Partial<LayoutProps>;

export const DividerStyled = styled.div<StyledDividerProps>(
  ({ theme }) => ({
    borderRight: `1px solid ${theme.color.secondary}`,
  }),
  layoutMixin
);

export const Divider = (props: StyledDividerProps) => {
  return <DividerStyled {...props} />;
};
