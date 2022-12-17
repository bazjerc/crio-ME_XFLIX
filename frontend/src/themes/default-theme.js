import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#181818",
      accent: "#202020",
    },
    input: {
      background: "#181818",
      border: "#606060",
    },
    button: {
      light: { background: "#4CA3FC", content: "#FFFFFF" },
      dark: { background: "#313131", content: "#606060" },
      filter: {
        background: "#202020",
        content: "#FFFFFF",
        selected: { background: "#FFFFFF", content: "#202020" },
      },
    },
    text: {
      cardTitle: "#FFFFFF",
      cardSubTitle: "#D1D5DA",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    h4: {
      fontSize: "24px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "14px",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default defaultTheme;
