import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import api from '../../services/api';

import { Container } from '../../styles/pages/Category'
import Header from '../../components/Header';
import Restaurant from '../../components/Restaurant';
import Empty from '../../components/Empty';

interface IRestaurant {
  id: number;
  title: string;
  image_url: string;
  category: string;
  distance: number;
  start_time: number;
  end_time: number;
  rating: number;
}

interface ICategoryProps {
  restaurants: IRestaurant[];
}

export default function CategoryList({ restaurants }: ICategoryProps) {
  const router = useRouter();

  const { category_slug } = router.query;

  return (
    <>
      <Header />
      <Container>
        <div>
          <h4>{category_slug} em Belém</h4>
            {
              restaurants?.length == 0 ? (
                <>
                  <Empty />
                  <h5>Ops... Parece que não há restaurantes :(</h5>
                </>
              ) : (
                <>
                  <ul>
                    {
                      restaurants?.map(restaurant => (
                        <li key={restaurant.title} >
                          <Restaurant restaurantData={restaurant} />
                        </li>
                      ))
                    }
                  </ul>
                  <button>
                    Ver mais restaurantes e mercados
                  </button>
                </>
              )
            }
        </div>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ICategoryProps> = async (context) => {
  const { category_slug } = context.params;
  
  const response = await api.get(`restaurants?category=${category_slug}`);

  const restaurants = response.data;

  return {
    props: {
      restaurants,
    },
  }
}
