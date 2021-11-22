export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  phone: 600 / 16,
  tablet: 950 / 16,
  laptop: 1300 / 16
}

const query = b => `(max-width: ${b}rem)`;

export const QUERIES = {
  tablet: query(BREAKPOINTS.tablet),
  phone: query(BREAKPOINTS.phone)
}