import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiSearch } from 'react-icons/fi';
import MobileMenu from '../../components/MobileMenu';
import Food from '../../components/pages/Restaurant/Food';
import api from '../../services/api';

import {
  Container,
  Header,
  MenuContainer,
  MenuCategoriesContainer,
  Menu,
} from '../../styles/pages/Restaurant';

interface IRestaurant {
  id: string;
  image_url: string;
  title: string;
  category: string;
  rating: number;
  price: string;
  distance: number;
  start_time: number;
  end_time: number;
}

export default function RestaurantPage() {
  const [restaurant, setRestaurant] = useState<IRestaurant>({} as IRestaurant);

  const router = useRouter();

  const { restaurant_slug } = router.query;

  useEffect(() => {
    async function loadRestaurant() {
      const response = await api.get(`restaurants?title=${restaurant_slug}`);

      setRestaurant(response.data[0]);
    }

    loadRestaurant();
  }, [restaurant_slug]);

  return (
    <Container>
      <Header>
        <FiChevronLeft size={23} />

        <FiSearch size={23} />
      </Header>

      {restaurant && (
        <main>
          <div>
            <span />
            <main>
              <img src={restaurant.image_url} alt={restaurant.title} />
            </main>
            <span>
              <FaStar fill="#e7a74e" size={12} />
              <p className="starred">{restaurant.rating}</p>
            </span>
          </div>
          <h1>{restaurant.title}</h1>
          <h2>
            {restaurant.category} • {restaurant.start_time}-
            {restaurant.end_time} min • {restaurant.distance} km • $$$ • ENTREGA{' '}
            {restaurant.price}
          </h2>

          <span className="see-more">Ver mais</span>
        </main>
      )}

      <MenuContainer>
        <MenuCategoriesContainer>
          <ul>
            <li className="active">
              <h3>Entradas</h3>
            </li>
            <li className="disabled">
              <h3>Combos Promocionais</h3>
            </li>
            <li className="disabled">
              <h3>Burgers</h3>
            </li>
            <li className="disabled">
              <h3>Cervejas</h3>
            </li>
            <li className="disabled">
              <h3>Bebidas</h3>
            </li>
            <li className="disabled">
              <h3>Pizzas</h3>
            </li>
            <li className="disabled">
              <h3>Batata Frita</h3>
            </li>
          </ul>
        </MenuCategoriesContainer>

        <Menu>
          <h3>Destaques</h3>

          <Food />
        </Menu>
      </MenuContainer>

      <MobileMenu />
    </Container>
  );
}
