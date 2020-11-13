import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
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
  cover_image_url: string;
  description?: string;
  title: string;
  category: string;
  rating: number;
  price: string;
  distance: number;
  start_time: number;
  end_time: number;
}

interface IRestarauntProps {
  restaurant: IRestaurant;
}

export default function RestaurantPage({ restaurant }: IRestarauntProps) {
  const router = useRouter();

  const { width } = useWindowSize();

  return (
    <>
      <Container>
        {width >= 960 ? (
          <Header />
        ) : (
          <RestaurantHeader cover_image_url={restaurant?.cover_image_url}>
            <button
              onClick={() => {
                router.back();
              }}
              type="button"
            >
              <FiChevronLeft size={30} color="#FFF" />
            </button>

            <FiSearch size={23} color="#FFF" />
          </RestaurantHeader>
        )}

        {restaurant && (
          <>
            <img
              src={restaurant.cover_image_url}
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
              <h2>{restaurant.description}</h2>
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

export const getServerSideProps: GetServerSideProps<IRestarauntProps> = async context => {
  const { restaurant_slug } = context.params;

  const response = await api.get(`restaurants?title=${restaurant_slug}`);

  const restaurant = response.data[0];

  return {
    props: {
      restaurant,
    },
  };
};
