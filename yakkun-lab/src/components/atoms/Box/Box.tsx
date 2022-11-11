import styled from "@emotion/styled";
import { BackgroundProps, backgroundMixin } from "@/styles/mixins/background";
import { BorderProps, borderMixin } from "@/styles/mixins/border";
import { LayoutProps, layoutMixin } from "@/styles/mixins/layout";
import { OpacityProps, opacityMixin } from "@/styles/mixins/opacity";
import { PositionProps, positionMixin } from "@/styles/mixins/position";
import { SpaceProps, spaceMixin } from "@/styles/mixins/space";
import { AllEventType } from "@/types/events";
import { ColorType } from "@/types/color";
import { animationMixin, AnimationProps } from "@/styles/mixins/animation";
import { ElementType, RefObject } from "react";
import { boxShadowMixin, boxShadowProps } from "@/styles/mixins/shadow";

type BoxBgProps = Partial<BackgroundProps>;

export type BoxStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Omit<BoxBgProps, "bgColor"> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<OpacityProps> &
  Partial<AllEventType> &
  Partial<AnimationProps> &
  Partial<boxShadowProps> & {
    bgColor?: ColorType;
  };

export const BoxStyled = styled.div<BoxStyleProps>(
  ({ theme, bgColor }) => {
    switch (bgColor) {
      case "body":
        return { backgroundColor: theme.color.body };
      case "primary":
        return { backgroundColor: theme.color.primary };
      case "secondary":
        return { backgroundColor: theme.color.secondary };
      case "typography":
        return { backgroundColor: theme.color.typography };
      default:
        return null;
    }
  },
  layoutMixin,
  spaceMixin,
  backgroundMixin,
  borderMixin,
  positionMixin,
  opacityMixin,
  animationMixin,
  boxShadowMixin
);

export type BoxProps = BoxStyleProps & {
  children?: React.ReactNode;
  ref?: RefObject<HTMLDivElement>;
  as?: ElementType<any> | undefined;
};
export const Box = (props: BoxProps) => {
  return <BoxStyled as={props.as} {...props} />;
};
