import { Theme, type Color, type Scale } from "@spectrum-web-components/theme";

export const updateTheme = async (color: Color, scale: Scale) => {
  const colorOptions = ["light", "dark"];
  const scaleOptions = ["medium", "large"];
  const themeElement = document.querySelector("sp-theme");
  if (colorOptions.includes(color)) {
    if (scaleOptions.includes(scale)) {
      Promise.all([
        import(`@spectrum-web-components/theme/theme-${color}.js`),
        import(`@spectrum-web-components/theme/scale-${scale}.js`),
      ]).then(() => {
        if (themeElement) {
          (themeElement as Theme).color = color;
          (themeElement as Theme).scale = scale;
        }
      });
    }
  }
};
