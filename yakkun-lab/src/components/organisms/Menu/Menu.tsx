import { Stack } from "@/components/atoms/Stack/Stack";
import { GridIcon } from "@/components/atoms/Icons/GridIcon";
import { HomeIcon } from "@/components/atoms/Icons/HomeIcon";
import { MoonIcon } from "@/components/atoms/Icons/MoonIcon";
import { SunIcon } from "@/components/atoms/Icons/SunIcon";
import { TwitterIcon } from "@/components/atoms/Icons/TwitterIcon";
import { GithubIcon } from "@/components/atoms/Icons/GithubIcon";
import { AppButton } from "@/components/molecules/AppButton/AppButton";
import { NoteIcon } from "@/components/atoms/Icons/NoteIcon";
import { Box } from "@/components/atoms/Box/Box";
import { useContext } from "react";
import { ThemeContext } from "@/lib/store/theme";
import styled from "@emotion/styled";
import Link from "next/link";
import { layoutMixin, LayoutProps } from "@/styles/mixins/layout";
import { borderMixin, BorderProps } from "@/styles/mixins/border";
import { spaceMixin, SpaceProps } from "@/styles/mixins/space";
import { Divider } from "@/components/atoms/Divider/Divider";

type MenuStyledProps = Partial<LayoutProps> &
  Partial<BorderProps> &
  Partial<SpaceProps>;

const MenuStyled = styled.menu<MenuStyledProps>(
  ({ theme }) => ({
    background: `${theme.color.primary}99`,
    "&::before": {
      content: `""`,
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      zIndex: "10",
      pointerEvents: "none",
      borderRadius: "14px",
      boxShadow: `5px 0 17px 0px ${theme.color.primary}99 inset;`,
    },
    "&::after": {
      content: `""`,
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      right: "0",
      zIndex: "10",
      pointerEvents: "none",
      borderRadius: "14px",
      boxShadow: `-5px 0 17px 0px ${theme.color.primary}99 inset;`,
    },
  }),
  {
    position: "fixed",
    transform: "translateX(-50%)",
    left: "50%",
    bottom: "20px",
    backdropFilter: "blur(3px)",
  },
  layoutMixin,
  borderMixin,
  spaceMixin
);

// const Divider = styled.div`
//   height: 50px;
//   ${({ theme }) => ` border-right:1px solid ${theme.colors.secondary}`}
// `;

export const Menu = () => {
  /**
   * NightModeの切り替えContext
   */
  const { isNightMode, setIsNightMode } = useContext(ThemeContext);

  return (
    <MenuStyled w={{ sm: "93%" }} m={{ md: "auto" }} borderRadius="14px">
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap="14px"
        py={2}
        px={3}
        overflowX="scroll"
      >
        <Link href="/" passHref>
          <AppButton
            icon={<HomeIcon width="100%" viewBox="0 0 24 24" fill="primary" />}
            chipName="Home"
          />
        </Link>
        <Link href="/gallery" passHref>
          <AppButton
            icon={<GridIcon viewBox="0 0 24 24" fill="primary" />}
            chipName="Gallery"
          />
        </Link>
        <Divider h="50px" />
        <a href="https://twitter.com/dr_parrot" target="blank">
          <AppButton
            icon={<TwitterIcon viewBox="0 0 24 24" fill="primary" />}
            chipName="Twitter"
          />
        </a>
        <a href="https://github.com/PK-Yakkun" target="blank">
          <AppButton
            icon={<GithubIcon viewBox="0 0 24 24" fill="primary" />}
            chipName="Github"
          />
        </a>
        <a href="https://zenn.dev/pk_yakkun" target="blank">
          <AppButton
            icon={<NoteIcon viewBox="0 0 24 24" fill="primary" />}
            chipName="Note"
          />
        </a>
        <Divider h="50px" />
        <Box
          onClick={() => setIsNightMode(!isNightMode)}
          // css={{ "&:hover": { cursor: "pointer" } }}
        >
          {isNightMode ? (
            <AppButton
              icon={<SunIcon viewBox="0 0 24 24" fill="primary" />}
              chipName="LightMode"
            />
          ) : (
            <AppButton
              icon={<MoonIcon viewBox="0 0 24 24" fill="primary" />}
              chipName="NightMode"
            />
          )}
        </Box>
      </Stack>
    </MenuStyled>
  );
};