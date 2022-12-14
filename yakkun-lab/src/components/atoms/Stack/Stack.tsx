import * as CSS from "csstype";
import styled from "@emotion/styled";
import { backgroundMixin, BackgroundProps } from "@/styles/mixins/background";
import { borderMixin, BorderProps } from "@/styles/mixins/border";
import { layoutMixin, LayoutProps } from "@/styles/mixins/layout";
import { opacityMixin, OpacityProps } from "@/styles/mixins/opacity";
import { spaceMixin, SpaceProps } from "@/styles/mixins/space";
import { animationMixin, AnimationProps } from "@/styles/mixins/animation";

export type StackStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<OpacityProps> &
  Partial<AnimationProps> & {
    direction?: CSS.Property.FlexDirection;
    alignItems?: CSS.Property.AlignItems;
    justifyContent?: CSS.Property.AlignContent;
    flexWrap?: CSS.Property.FlexWrap;
    gap?: string;
  };

export const StackStyled = styled.div<StackStyleProps>(
  { display: "flex" },
  ({ direction }) => direction != null && { flexDirection: `${direction}` },
  ({ alignItems }) => alignItems != null && { alignItems: `${alignItems}` },
  ({ justifyContent }) =>
    justifyContent != null && { justifyContent: `${justifyContent}` },
  ({ flexWrap }) => flexWrap != null && { flexWrap: `${flexWrap}` },
  ({ gap }) => gap != null && { gap: `${gap}` },
  layoutMixin,
  spaceMixin,
  backgroundMixin,
  borderMixin,
  opacityMixin,
  animationMixin
);

export type StackProps = StackStyleProps & {
  children?: React.ReactNode;
};

export const Stack = (props: StackProps) => {
  return <StackStyled {...props} />;
};
