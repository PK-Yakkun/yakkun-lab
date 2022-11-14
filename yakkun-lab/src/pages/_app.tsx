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

function MyApp({ Component, pageProps }: AppProps) {
  // NightModeに切り替えるステート
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  return (
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
          {/* <meta
            property="og:image"
            content={`https://yuis.vercel.app/images/card_large_yuis.png`}
          />
          <meta name="twitter:card" content="summary_large_image" /> */}
        </Head>
        <NormalTemp>
          <Component {...pageProps} />
        </NormalTemp>
        <Footer />
        <Menu />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
