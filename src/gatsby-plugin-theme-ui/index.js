import baseTheme from "gatsby-theme-changelog/src/gatsby-plugin-theme-ui";
import { hexToRgba } from "gatsby-theme-changelog/src/utils/helpers";

import merge from "lodash.merge";

const colors = {
  heading: "#3a3f46",
  text: "#3a3f46",
  background: "#ffffff",
  primary: "#2874ed",
  secondary: "#2874ed",
  lightGray: "#f8f9fb",
  gray: "#636d78"
};

export default merge({}, baseTheme, {
  colors: {
    ...colors,
    modes: {
      dark: {
        heading: "#ffffff",
        text: "#d3d4d4",
        background: "#1e2227",
        primary: "#2874ed",
        secondary: "#f8f9fb",
        lightGray: hexToRgba(colors.lightGray, 0.1),
        gray: "#ffffff"
      }
    }
  },
  styles: {
    th: {
      background: hexToRgba(colors.primary, 0.2)
    }
  }
});
