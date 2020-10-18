import { useCallback, useState } from "react";

import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Categories from '../components/Categories';
import Voucher from '../components/Voucher';
import Carousel from '../components/Carousel';
import Famous from '../components/Famous';
import SuggestedRestaurants from '../components/SuggestedRestaurants';

import { Container } from '../styles/pages/Home';

export default function Home() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

  return (
    <ThemeProvider theme={theme} >

      <Container>
        <Header toggleTheme={toggleTheme} />
        <Voucher />
        <Categories />
        <Carousel />
        <Famous />
        <SuggestedRestaurants />
        <MobileMenu />
      </Container>
    </ThemeProvider>
  )
}
