import { animationMixin, AnimationProps } from "@/styles/mixins/animation";
import { backgroundMixin, BackgroundProps } from "@/styles/mixins/background";
import { borderMixin, BorderProps } from "@/styles/mixins/border";
import { layoutMixin, LayoutProps } from "@/styles/mixins/layout";
import { opacityMixin, OpacityProps } from "@/styles/mixins/opacity";
import { positionMixin, PositionProps } from "@/styles/mixins/position";
import { boxShadowMixin, boxShadowProps } from "@/styles/mixins/shadow";
import { spaceMixin, SpaceProps } from "@/styles/mixins/space";
import { AllEventType } from "@/types/events";
import styled from "@emotion/styled";

export type ListItemStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<OpacityProps> &
  Partial<AllEventType> &
  Partial<AnimationProps> &
  Partial<boxShadowProps>;

export const ListItemStyled = styled.li<ListItemStyleProps>(
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

export type ListItemProps = ListItemStyleProps & {
  children?: React.ReactNode;
};

export const ListItem = (props: ListItemProps) => {
  return <ListItemStyled {...props}>{props.children}</ListItemStyled>;
};
