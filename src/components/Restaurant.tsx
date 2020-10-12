import { Container } from '../styles/components/Restaurant';
import { FaStar } from 'react-icons/fa';

interface IRestaurantProps {
  restaurantData: {
    id: number;
    title: string;
    image_url: string;
    category: string;
    distance: number;
    start_time: number;
    end_time: number;
    rating: number;
  }
}

export default function Restaurant({ restaurantData }: IRestaurantProps) {
  const {
    image_url,
    title,
    category,
    rating,
    distance,
    start_time,
    end_time,
  } = restaurantData;

  return (
    <Container>
      <div>
        <figure>
          <img
            src={image_url}
            alt={title}
          />
        </figure>
        <aside></aside>
        <main>
          <h5>{title}</h5>
          <span>
            <FaStar fill="#e7a74e" size={12} />
            <p className="starred" >
              {rating}
            </p>
              &nbsp;•   {category}  •  {distance} km
          </span>
          <span>
            {start_time}-{end_time} min •
          </span>
        </main>
      </div>
    </Container>
  )
}
