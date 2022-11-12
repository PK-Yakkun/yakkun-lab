import { animationMixin, AnimationProps } from "@/styles/mixins/animation";
import { BackgroundProps, backgroundMixin } from "@/styles/mixins/background";
import { BorderProps, borderMixin } from "@/styles/mixins/border";
import { GridChildrenProps, gridChildrenMixin } from "@/styles/mixins/grid";
import { hoverMixin, HoverProps } from "@/styles/mixins/hover";
import { LayoutProps, layoutMixin } from "@/styles/mixins/layout";
import { OpacityProps, opacityMixin } from "@/styles/mixins/opacity";
import { PositionProps, positionMixin } from "@/styles/mixins/position";
import { boxShadowMixin, boxShadowProps } from "@/styles/mixins/shadow";
import { SpaceProps, spaceMixin } from "@/styles/mixins/space";
import styled from "@emotion/styled";

export type GridChildrenStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<OpacityProps> &
  Partial<boxShadowProps> &
  Partial<GridChildrenProps> &
  Partial<HoverProps> &
  Partial<AnimationProps>;

export const GridChildrenStyled = styled.div<GridChildrenStyleProps>(
  spaceMixin,
  backgroundMixin,
  borderMixin,
  positionMixin,
  opacityMixin,
  layoutMixin,
  boxShadowMixin,
  gridChildrenMixin,
  hoverMixin,
  animationMixin
);

export type GridItemProps = GridChildrenStyleProps & {
  children?: React.ReactNode;
};

export const GridItem = (props: GridItemProps) => {
  return <GridChildrenStyled {...props} />;
};
