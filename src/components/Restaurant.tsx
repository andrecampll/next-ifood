import { FaStar } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import { Container } from '../styles/components/Restaurant';

interface IRestaurantProps {
  restaurantData?: {
    id: number;
    title: string;
    image_url: string;
    category: string;
    distance: number;
    start_time: number;
    end_time: number;
    rating: number;
    price?: string;
  };
  isFamousContainer?: boolean;
  loading?: boolean;
}

export default function Restaurant({
  restaurantData,
  isFamousContainer,
  loading,
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
    <>
      {loading ? (
        <Container isFamousContainer={isFamousContainer}>
          <div>
            <figure>
              <Skeleton width={86} height={86} />
            </figure>
            <aside />
            <main>
              <h5>
                <Skeleton width={90} height={20} />
              </h5>
              <span>
                <Skeleton width={175} height={20} />
              </span>
              <span>
                <Skeleton width={70} height={20} />
              </span>
            </main>
          </div>
        </Container>
      ) : (
        <Container isFamousContainer={isFamousContainer}>
          <div>
            <figure>
              <img src={image_url} alt={title} />
            </figure>
            <aside />
            <main>
              <h5>{title}</h5>
              <span>
                <FaStar fill="#e7a74e" size={12} />
                <p className="starred">{rating}</p>
                &nbsp;• {category} • {distance} km
              </span>
              <span>
                {start_time}-{end_time} min • {price}
              </span>
            </main>
          </div>
        </Container>
      )}
    </>
  );
}
