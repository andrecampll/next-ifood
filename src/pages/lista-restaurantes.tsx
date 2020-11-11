import { useSelector } from 'react-redux';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Categories from '../components/Categories';
import Voucher from '../components/Voucher';
import Carousel from '../components/Carousel';
import Famous from '../components/Famous';
import SuggestedRestaurants from '../components/SuggestedRestaurants';

import { Container } from '../styles/pages/Home';

export default function Home() {
  const cart = useSelector(state => state);

  console.log(cart);

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
