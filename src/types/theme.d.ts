import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    dadago: PaletteColor;
  }

  interface PaletteOptions {
    dadago: SimplePaletteColorOptions;
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    dadago: true;
  }
}
