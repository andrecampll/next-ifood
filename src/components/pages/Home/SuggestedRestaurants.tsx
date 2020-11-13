import { useEffect, useState } from 'react';

import { Container } from '../../../styles/components/SuggestedRestaurants';
import Restaurant from '../../Restaurant';

import api from '../../../services/api';
import RestaurantPlaceHolder from './placeholders/RestaurantPlaceholder';

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

export default function SuggestedRestaurants() {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    async function loadRestaurants() {
      const response = await api.get('restaurants');

      setRestaurants(response.data);
    }

    loadRestaurants();
  }, []);

  return (
    <Container>
      <div>
        <h4>Restaurantes e mercados</h4>

        <ul>
          {restaurants.length === 0 ? (
            <RestaurantPlaceHolder repeatCount={9} isFamousContainer={false} />
          ) : (
            restaurants.map(restaurant => (
              <li key={restaurant.title}>
                <Restaurant restaurantData={restaurant} />
              </li>
            ))
          )}
        </ul>
        <button type="button">Ver mais restaurantes e mercados</button>
      </div>
    </Container>
  );
}
