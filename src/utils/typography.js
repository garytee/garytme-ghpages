import Typography from "typography";

let headerFontFamily = ["Patua One", "cursive"];
let bodyFontFamily = ["Cabin Condensed", "sans-serif"];

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.4,
bodyColor: "hsla(0,0%,0%,0.87)",
  headerWeight: "400",
  bodyWeight: 400,
  boldWeight: 700,
    omitGoogleFont  : true,
    headerFontFamily: headerFontFamily,
    bodyFontFamily  : bodyFontFamily
});

export default typography;