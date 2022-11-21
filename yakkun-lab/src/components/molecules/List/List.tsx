import { AnimationProps, animationMixin } from "@/styles/mixins/animation";
import { BackgroundProps, backgroundMixin } from "@/styles/mixins/background";
import { BorderProps, borderMixin } from "@/styles/mixins/border";
import { LayoutProps, layoutMixin } from "@/styles/mixins/layout";
import { OpacityProps, opacityMixin } from "@/styles/mixins/opacity";
import { PositionProps, positionMixin } from "@/styles/mixins/position";
import { boxShadowProps, boxShadowMixin } from "@/styles/mixins/shadow";
import { SpaceProps, spaceMixin } from "@/styles/mixins/space";
import { AllEventType } from "@/types/events";
import styled from "@emotion/styled";

export type ListStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<OpacityProps> &
  Partial<AllEventType> &
  Partial<AnimationProps> &
  Partial<boxShadowProps>;

export const ListStyled = styled.ul<ListStyleProps>(
  backgroundMixin,
  layoutMixin,
  spaceMixin,
  backgroundMixin,
  borderMixin,
  positionMixin,
  opacityMixin,
  animationMixin,
  boxShadowMixin
);

export type ListProps = ListStyleProps & {
  children: React.ReactNode;
};

export const List = (props: ListProps) => {
  return <ListStyled {...props}>{props.children}</ListStyled>;
};
