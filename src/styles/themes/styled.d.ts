import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      fontPrimary: string;
      fontSecondary: string;
    };
  }
}
