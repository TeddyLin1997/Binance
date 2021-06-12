import 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      dark: string;
      gray: string;
      active: string;
      green: string;
      red: string;
      cream: string;
    };
  }
}
