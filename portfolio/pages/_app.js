import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  const lightTheme = createTheme({
    type: 'light',
    theme: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd', // optional
    },
  });

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    // brand colors
    primaryLight: '$green200',
    primaryLightHover: '$green300',
    primaryLightActive: '$green400',
    primaryLightContrast: '$green600',
    primary: '#4ADE7B',
    primaryBorder: '$green500',
    primaryBorderHover: '$green600',
    primarySolidHover: '$green700',
    primarySolidContrast: '$white',
    primaryShadow: '$green500',

    gradient:
      'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
    link: '#5E1DAD',

    // you can also create your own color
    myColor: '#ff4ecd',
  },
});
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
