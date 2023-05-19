import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
const theme = createTheme({
  typography: {
    fontFamily:
      "Montserrat Alternates, sans-serif, Roboto, Helvetica Neue, Arial",
    fontWeightBold: 900, // sets the font weight to bold
    fontSize: 18, // sets the font size to 18px
  },
});
const responsiveTheme = responsiveFontSizes(theme);
export default responsiveTheme;