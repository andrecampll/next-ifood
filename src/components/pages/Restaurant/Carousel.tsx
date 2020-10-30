import { useAxios } from '../../../hooks/useAxios';
import { Container } from '../../../styles/components/pages/Restaurant/Carousel';
import Food from './Food';

interface IFood {
  id: string;
  title: string;
  image_url: string;
  description: string;
  price: string;
}

export default function Carousel() {
  const { data } = useAxios<IFood[]>('foods');

  return (
    <Container>
      {data?.map(food => (
        <Food foodData={food} key={food.id} />
      ))}
    </Container>
  );
}
