import { useAxios } from '../../../hooks/useAxios';
import { Container } from '../../../styles/components/pages/Restaurant/Carousel';
import Food from './Food';
import FoodPlaceholder from './placeholders/FoodPlaceholder';
import FoodModal from './FoodModal';

interface IFood {
  id: string;
  title: string;
  image_url: string;
  description: string;
  price: number;
}

export default function Carousel() {
  const { data } = useAxios<IFood[]>('foods');

  if (!data) {
    return (
      <Container>
        <FoodPlaceholder repeatCount={2} />
      </Container>
    );
  }

  return (
    <Container>
      {data?.map(food => (
        <Food foodData={food} key={food.id} />
      ))}
      <FoodModal />
    </Container>
  );
}
