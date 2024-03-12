export type LogoProps = {
  stylesFonts: string;
  logo?: {
    icon: string | undefined;
    alt: string | undefined;
    path: string | undefined;
    label: string | undefined;
  };
};

export type MenuProps = {
  onClickBtn?: () => void;
};
