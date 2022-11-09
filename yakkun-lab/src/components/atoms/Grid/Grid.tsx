import { BackgroundProps, backgroundMixin } from "@/styles/mixins/background";
import { BorderProps, borderMixin } from "@/styles/mixins/border";
import { GridParentProps, gridParentMixin } from "@/styles/mixins/grid";
import { LayoutProps, layoutMixin } from "@/styles/mixins/layout";
import { OpacityProps, opacityMixin } from "@/styles/mixins/opacity";
import { PositionProps, positionMixin } from "@/styles/mixins/position";
import { SpaceProps, spaceMixin } from "@/styles/mixins/space";
import styled from "@emotion/styled";

export type GridParentStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<OpacityProps> &
  Partial<GridParentProps>;

export const GridStyled = styled.div<GridParentStyleProps>(
  spaceMixin,
  backgroundMixin,
  borderMixin,
  positionMixin,
  opacityMixin,
  layoutMixin,
  gridParentMixin
);

export type GridProps = GridParentStyleProps & {
  children?: React.ReactNode;
};

export const Grid = (props: GridProps) => {
  return <GridStyled {...props} />;
};
