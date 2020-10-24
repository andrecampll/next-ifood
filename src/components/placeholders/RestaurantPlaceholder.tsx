import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import Restaurant from '../Restaurant';

interface IPlaceHolderProps {
  repeatCount: number;
}

export default function RestaurantPlaceHolder({ repeatCount }: IPlaceHolderProps) {
  const howMany = Array.from(Array(repeatCount).keys());

  const restaurantData = {
    id: 0,
    title: '',
    image_url: '',
    category: '',
    distance: 0,
    start_time: 0,
    end_time: 0,
    rating: 0,
  }

  return (
    <>
      {howMany.map(placeholder => (
        <Restaurant
          key={placeholder}
          isFamousContainer
          loading
          restaurantData={restaurantData}
        />
      ))}
    </>
  );
}
