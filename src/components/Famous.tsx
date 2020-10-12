import { useEffect, useState } from 'react';
import { Container } from '../styles/components/Famous';
import Restaurant from '../components/Restaurant';

import api from '../services/api';

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

export default function Famous() {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    async function loadRestaurants() {
      const response = await api.get('famous');

      setRestaurants(response.data);
    }

    loadRestaurants();
  }, []);

  return (
    <Container className="scroll-box">
      <header>
        <h4>Famosos no iFood</h4>
        <a href="">Ver mais</a>
      </header>
      <div role="list" className="scroll-box__wrapper" >
        {
          restaurants.map(restaurant => (
            <Restaurant
              key={restaurant.title}
              restaurantData={restaurant}
            />
          ))
        }
      </div>
    </Container>
  )
}
