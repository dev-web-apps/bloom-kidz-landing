import { Theme as MuiTheme } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";

export {};

declare global {
  type ReactNode =
    | React.ReactElement<unknown>
    | FunctionComponent<unknown>
    | React.ComponentClass<unknown>
    | null;

  interface IButton extends ButtonProps {
    isLoading?: boolean;
    loadcolor?: string;
    children: React.ReactNode;
  }

  interface IVideoPlayer {
    src: string;
    poster?: string;
    loop?: boolean;
    autoplay?: boolean | undefined;
  }
  interface IPackageCard {
    price: string;
    packageName: string;
    perks: string[];
    dark?: boolean;
    yearly?: boolean;
  }
}

declare module "@mui/material/styles/createPalette" {
  type colorNumber = {
    [number]: string;
  };
  export interface PaletteOptions {
    neutral: PaletteColor | colorNumber;
  }
  export interface Palette {
    neutral: PaletteColor | colorNumber;
  }
}

declare module "@emotion/react" {
  export type Theme = MuiTheme;
}
