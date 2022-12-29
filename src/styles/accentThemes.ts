interface ITheme {
  [key: string]: {
    accentLight: string;
    accentMedium: string;
    accentDark: string;
    backgroundCover: string;
    background: string;
    color: string;
  };
}

const theme = {
  red: {
    accentLight: "#e04364",
    accentMedium: "#dc143c",
    accentDark: "#a01a36",
    backgroundCover: "rgba(220, 20, 60, 0.75)",
    background: "var(--background-color)",
    color: "var(--text-color)",
  },

  blue: {
    accentLight: "#4040ff",
    accentMedium: "#2828ff",
    accentDark: "#0000ec",
    backgroundCover: "rgba(40, 40, 255, 0.75)",
    background: "var(--background-color)",
    color: "var(--text-color)",
  },

  green: {
    accentLight: "#2aae2a",
    accentMedium: "#37a137",
    accentDark: "#228b22",
    backgroundCover: "rgba(55, 161, 55, 0.75)",
    background: "var(--background-color)",
    color: "var(--text-color)",
  },

  purple: {
    accentLight: "#c94bff",
    accentMedium: "#ab22e6",
    accentDark: "#9400d3",
    backgroundCover: "rgba(171, 34, 230, 0.75)",
    background: "var(--background-color)",
    color: "var(--text-color)",
  },
} as ITheme;

export { theme };
