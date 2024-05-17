export const theme = {
  palette: {
    background: {
      main: "#FEFAE0",
    },
    typography: {
      light: "#FFFFFF",
      faded: "#FEFAE0",
      hover: "#2a92e5",
      dark: "#153448",
    },
    header: {
      main: "#153448",
    },
    footer: {
      main: "#153448",
    },
    paper: {},
    button: {
      main: "#3C5B6F",
      icon: "#515151",
    },
    icon: {
      main: "#ffffff",
    },
    border: {
      main: "#262b33",
    },
    input: {
      main: "#ffffff",
    },
  },
  typography: {
    font: "Oswald",
    size: {
      header: "30px",
      title: "28px",
      subtitle: "20px",
      content: "14px",
    },
  },
  padding: (amount: number) => `${amount}px`,
  margin: (amount: number) => `${amount}px`,
};
