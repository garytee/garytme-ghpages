import Typography from 'typography';

const headerFontFamily = ['Patua One', 'cursive'];
const bodyFontFamily = ['Cabin Condensed', 'sans-serif'];

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.4,
  bodyColor: 'hsla(0,0%,0%,0.87)',
  headerWeight: '400',
  bodyWeight: 400,
  boldWeight: 700,
  omitGoogleFont: true,
  headerFontFamily,
  bodyFontFamily,
});

export default typography;
