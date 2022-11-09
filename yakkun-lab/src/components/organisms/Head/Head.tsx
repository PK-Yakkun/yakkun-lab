import NextHead from "next/head";

type HeadProps = {
  title?: string;
  children?: React.ReactNode;
};

export const Head = ({ title, children }: HeadProps) => {
  return (
    <NextHead>
      <title>Yakkun Lab｜{title}</title>
      {children}
    </NextHead>
  );
};
