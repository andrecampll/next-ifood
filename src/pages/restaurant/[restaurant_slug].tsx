import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiSearch } from 'react-icons/fi';
import Header from '../../components/Header';
import MobileMenu from '../../components/MobileMenu';
import Carousel from '../../components/pages/Restaurant/Carousel';
import MenuCategory from '../../components/pages/Restaurant/MenuCategory';
import useWindowSize from '../../hooks/useWindowDimensions';
import api from '../../services/api';

import {
  Container,
  RestaurantHeader,
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

  const { width } = useWindowSize();

  useEffect(() => {
    async function loadRestaurant() {
      const response = await api.get(`restaurants?title=${restaurant_slug}`);

      setRestaurant(response.data[0]);
    }

    loadRestaurant();
  }, [restaurant_slug]);

  return (
    <>
      <Container>
        {width >= 960 ? (
          <Header />
        ) : (
          <RestaurantHeader>
            <Link href="/lista-restaurantes">
              <FiChevronLeft size={30} color="#FFF" />
            </Link>

            <FiSearch size={23} color="#FFF" />
          </RestaurantHeader>
        )}

        {restaurant && (
          <>
            <img
              src="https://static-images.ifood.com.br/image/upload//capa/98e65427-a33c-49ce-b3fc-637b4a460e7f/201912161910_IhCx_v@2x.jpg"
              alt="cover"
              className="cover-image"
            />
            <main>
              <div>
                <span />
                <main>
                  {width < 960 && (
                    <img src={restaurant.image_url} alt={restaurant.title} />
                  )}
                </main>
                <span>
                  <FaStar fill="#e7a74e" size={15} />
                  <p className="starred">{restaurant.rating}</p>
                </span>
              </div>
              <h1>{restaurant.title}</h1>
              <h2>
                O Habib’s é a maior rede de restaurantes do mundo de comida
                árabe. Delícias como a exclusiva esfiha, kibe, beirute, pastel,
                pizzas, bolinho de bacalhau e sobremesas como sorvetes, pastel
                de belém, pudim e refrigerantes e sucos completam seu pedido
              </h2>
              <h3>
                {restaurant.category} • {restaurant.start_time}-
                {restaurant.end_time} min • {restaurant.distance} km • $$$ •
                ENTREGA {restaurant.price}
              </h3>

              <span className="see-more">Ver mais</span>
            </main>
          </>
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

            <Carousel />

            <MenuCategory category_title="Entradas" />
            <MenuCategory category_title="Combos Promocionais" />
            <MenuCategory category_title="Burgers" />
          </Menu>
        </MenuContainer>

        <MobileMenu />
      </Container>
    </>
  );
}
