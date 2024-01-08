import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      brand: {
        main: string;
        secondary: string;
        hover: string;
      };
      textColor: {
        primary: string;
        secondary: string;
        light: string;
        darkerLight: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: {
      brand?: {
        main?: string;
        secondary?: string;
        hover?: string;
      };
      textColor?: {
        primary?: string;
        secondary?: string;
        light?: string;
        darkerLight?: string;
      };
    };
  }
}
