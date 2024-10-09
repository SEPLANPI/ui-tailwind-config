module.exports = {
  darkMode: "media", // or 'class'
  theme: {
    colors: {
      gray: {
        50: "#f8f9fa",
        100: "#f1f3f5",
        200: "#e9ecef",
        300: "#dee2e6",
        400: "#ced4da",
        500: "#adb5bd",
        600: "#868e96",
        700: "#495057",
        800: "#343a40",
        900: "#212529",
      },
      red: {
        50: "#fff5f5",
        100: "#ffe3e3",
        200: "#ffc9c9",
        300: "#ffa8a8",
        400: "#ff8787",
        500: "#ff6b6b",
        600: "#fa5252",
        700: "#f03e3e",
        800: "#e03131",
        900: "#c92a2a",
      },
      orange: {
        50: "#fff4e6",
        100: "#ffe8cc",
        200: "#ffd8a8",
        300: "#ffc078",
        400: "#ffa94d",
        500: "#ff922b",
        600: "#fd7e14",
        700: "#f76707",
        800: "#e8590c",
        900: "#d9480f",
      },
      yellow: {
        50: "#fff9db",
        100: "#fff3bf",
        200: "#ffec99",
        300: "#ffe066",
        400: "#ffd43b",
        500: "#fcc419",
        600: "#fab005",
        700: "#f59f00",
        800: "#f08c00",
        900: "#e67700",
      },
      green: {
        50: "#ebfbee",
        100: "#d3f9d8",
        200: "#b2f2bb",
        300: "#8ce99a",
        400: "#69db7c",
        500: "#51cf66",
        600: "#40c057",
        700: "#37b24d",
        800: "#2f9e44",
        900: "#2b8a3e",
      },
      blue: {
        50: "#e7f5ff",
        100: "#d0ebff",
        200: "#a5d8ff",
        300: "#74c0fc",
        400: "#4dabf7",
        500: "#339af0",
        600: "#228be6",
        700: "#1c7ed6",
        800: "#1971c2",
        900: "#1864ab",
      },
      purple: {
        50: "#f3f0ff",
        100: "#e5dbff",
        200: "#d0bfff",
        300: "#b197fc",
        400: "#9775fa",
        500: "#845ef7",
        600: "#7950f2",
        700: "#7048e8",
        800: "#6741d9",
        900: "#5f3dc4",
      },
      pink: {
        50: "#fff0f6",
        100: "#ffdeeb",
        200: "#fcc2d7",
        300: "#faa2c1",
        400: "#f783ac",
        500: "#f06595",
        600: "#e64980",
        700: "#d6336c",
        800: "#c2255c",
        900: "#a61e4d",
      },
      cyan: {
        50: "#e3fafc",
        100: "#c5f6fa",
        200: "#99e9f2",
        300: "#66d9e8",
        400: "#3bc9db",
        500: "#22b8cf",
        600: "#15aabf",
        700: "#1098ad",
        800: "#0c8599",
        900: "#0b7285",
      },
      lime: {
        50: "#f4fce3",
        100: "#e9fac8",
        200: "#d8f5a2",
        300: "#c0eb75",
        400: "#a9e34b",
        500: "#94d82d",
        600: "#82c91e",
        700: "#74b816",
        800: "#66a80f",
        900: "#5c940d",
      },
      govBlue: {
        50: "#e6edf6",
        100: "#b1c8e2",
        200: "#8BAED4",
        300: "#5688C1",
        400: "#3571B5",
        500: "#034EA2",
        600: "#034793",
        700: "#023773",
        800: "#022B59",
        900: "#012144",
      },
      neutral: {
        0: "#ffffff", // White
        1000: "#000000", // Black
      },
    },
    fontFamily: {
      sans: [
        "Figtree, -apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    fontSize: {
      xs: "calc(0.75rem * var(--mantine-scale))",
      sm: "calc(0.875rem * var(--mantine-scale))",
      base: "calc(1rem * var(--mantine-scale))",
      lg: "calc(1.125rem * var(--mantine-scale))",
      xl: "calc(1.25rem * var(--mantine-scale))",
      "2xl": "calc(1.5rem * var(--mantine-scale))",
      "3xl": "calc(1.875rem * var(--mantine-scale))",
      "4xl": "calc(2.25rem * var(--mantine-scale))",
      "5xl": "calc(3rem * var(--mantine-scale))",
      "6xl": "calc(3.75rem * var(--mantine-scale))",
      "7xl": "calc(4.5rem * var(--mantine-scale))",
      "8xl": "calc(6rem * var(--mantine-scale))",
      "9xl": "calc(8rem * var(--mantine-scale))",
    },
    screens: {
      // Definindo os breakpoints de acordo com o tema fornecido
      xs: "36em", // 576px
      sm: "48em", // 768px
      md: "62em", // 992px
      lg: "75em", // 1200px
      xl: "88em", // 1408px
    },
    extend: {
      colors: {
        background: "white",
        foreground: "#09090B",
        primary: {
          DEFAULT: "#034793",
          foreground: 'white',
        },
        secondary: {
          DEFAULT: "#f8f9fa",
          foreground: "#212529",
        },
        muted: {
          DEFAULT: "#ced4da",
          foreground: "#868e96",
        },
      },
      borderRadius: {
        xs: "calc(0.125rem * var(--mantine-scale))",
        sm: "calc(0.25rem * var(--mantine-scale))",
        md: "calc(0.5rem * var(--mantine-scale))",
        lg: "calc(1rem * var(--mantine-scale))",
        xl: "calc(2rem * var(--mantine-scale))",
      },
      spacing: {
        xs: "calc(0.625rem * var(--mantine-scale))",
        sm: "calc(0.75rem * var(--mantine-scale))",
        md: "calc(1rem * var(--mantine-scale))",
        lg: "calc(1.25rem * var(--mantine-scale))",
        xl: "calc(2rem * var(--mantine-scale))",
      },
      lineHeight: {
        xs: "1.4",
        sm: "1.45",
        md: "1.55",
        lg: "1.6",
        xl: "1.65",
      },
      boxShadow: {
        xs: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)",
        sm: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem",
        md: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem",
        lg: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem",
        xl: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem",
      },
    },
  },
  plugins: [],
};
