export const mediaQuery = (maxWidth) => `
@media (max-width: ${maxWidth}px)`;

const media = {
  xxlarge: mediaQuery(1920),
  xlarge: mediaQuery(1440),
  large: mediaQuery(1200),
  medium: mediaQuery(1024),
  small: mediaQuery(768),
  custom: mediaQuery,
};

export default media;
