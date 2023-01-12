import { M_PLUS_1 } from "@next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { ThemeContext } from "@/lib/store/theme";
import { theme, nightTheme } from "@/theme/theme";
import { useState } from "react";
import { Head } from "@/components/organisms/Head/Head";
import { Menu } from "@/components/organisms/Menu/Menu";
import { NormalTemp } from "@/components/templetes/NormalTemp/NormalTemp";
import { Footer } from "@/components/molecules/Footer/Footer";
import styled from "@emotion/styled";

const mPlus1 = M_PLUS_1({
  weight: ["400", "700", "900"],
  style: ["normal"],
  subsets: ["japanese"],
  display: "swap",
});

const GlobalFontFamilyStyled = styled.div({
  fontFamily: mPlus1.style.fontFamily,
});

function MyApp({ Component, pageProps }: AppProps) {
  // NightModeに切り替えるステート
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  return (
    <>
      <ThemeProvider theme={isNightMode ? nightTheme : theme}>
        <ThemeContext.Provider value={{ isNightMode, setIsNightMode }}>
          <Head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta
              property="description"
              content="やっくんのポートフォリオです。Webデザインとかフロントエンドとかやったりやってなかったりします。"
            />
            <meta property="og:title" content="Yakkun Lab" />
            <meta
              property="og:description"
              content="やっくんのポートフォリオです。Webデザインとかフロントエンドとかやったりやってなかったりします。"
            />
            <meta
              property="og:image"
              content={`https://pk-yakkun.com/images/og/ogp_l_yakkun-lab.png`}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Yakkun Lab" />
            <meta
              name="twitter:description"
              content="やっくんのポートフォリオです。"
            />
            <meta
              name="twitter:image"
              content="https://pk-yakkun.com/images/og/ogp_l_yakkun-lab.png"
            />
          </Head>
          <GlobalFontFamilyStyled>
            <NormalTemp>
              <Component {...pageProps} />
            </NormalTemp>
            <Footer />
          </GlobalFontFamilyStyled>
          <Menu />
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
