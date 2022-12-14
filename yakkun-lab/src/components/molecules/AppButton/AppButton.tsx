import styled from "@emotion/styled";
import { BackgroundProps, backgroundMixin } from "@/styles/mixins/background";
import { BorderProps, borderMixin } from "@/styles/mixins/border";
import { LayoutProps, layoutMixin } from "@/styles/mixins/layout";
import { PositionProps, positionMixin } from "@/styles/mixins/position";
import { SpaceProps, spaceMixin } from "@/styles/mixins/space";
import { AllEventType } from "@/types/events";
import { Button } from "@/components/atoms/Button/Button";
import { HoverProps, hoverMixin } from "@/styles/mixins/hover";

export type AppButtonStyleProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<BackgroundProps> &
  Partial<BorderProps> &
  Partial<PositionProps> &
  Partial<HoverProps> &
  Partial<AllEventType>;

export const AppButtonStyled = styled.div<AppButtonProps>(
  ({ theme }) => ({
    background: theme.color.secondary,
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
    transition: "0.3s",
    "&:hover > *": {
      opacity: "1",
    },
  }),
  layoutMixin,
  spaceMixin,
  backgroundMixin,
  borderMixin,
  positionMixin,
  hoverMixin
);

export type AppButtonProps = AppButtonStyleProps & {
  icon?: React.ReactNode;
  bgColor?: string;
  chipName?: string;
};

export const AppButton = (props: AppButtonProps) => {
  return (
    <AppButtonStyled
      w={{ sm: "58px", md: "64px" }}
      h={{ sm: "58px", md: "64px" }}
      position="relative"
      p={2}
      borderRadius="12px"
      hover={{ sm: "1", md: "0.8" }}
    >
      <Button>{props.icon}</Button>
    </AppButtonStyled>
  );
};
