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
    price ?: string;
  };
  isFamousContainer?: boolean;
}

export default function Restaurant({
  restaurantData,
  isFamousContainer
}: IRestaurantProps) {
  const {
    image_url,
    title,
    category,
    rating,
    distance,
    start_time,
    end_time,
    price,
  } = restaurantData;

  return (
    <Container isFamousContainer={isFamousContainer} >
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
            {start_time}-{end_time} min • {price}
          </span>
        </main>
      </div>
    </Container>
  )
}
