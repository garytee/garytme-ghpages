// import Typography from "typography"
// import funstonTheme from 'typography-theme-funston'

// const typography = new Typography(
//   funstonTheme
// )

// export default typography

import Typography from "typography";

// let bodyFontFamily = ["Patua One", "cursive"];
// let headerFontFamily = ["Cabin Condensed", "sans-serif"];

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