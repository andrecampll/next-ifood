import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Categories from '../components/pages/Home/Categories';
import Voucher from '../components/pages/Home/Voucher';
import Carousel from '../components/pages/Home/Carousel';
import Famous from '../components/pages/Home/Famous';
import SuggestedRestaurants from '../components/pages/Home/SuggestedRestaurants';

import { Container } from '../styles/pages/Home';

export default function Home() {
  return (
    <>
      <Container>
        <Header isFixed />
        <Voucher />
        <Categories />
        <Carousel />
        <Famous />
        <SuggestedRestaurants />
        <MobileMenu />
      </Container>
    </>
  );
}
