import { useAxios } from '../../../hooks/useAxios';
import {
  Container,
  FoodsContainer,
} from '../../../styles/components/pages/Restaurant/MenuCategory';
import Food from './Food';

interface IMenuCategoryProps {
  category_title: string;
}

interface IFood {
  id: string;
  title: string;
  image_url: string;
  description: string;
  price: string;
}

export default function MenuCategory({ category_title }: IMenuCategoryProps) {
  const { data } = useAxios<IFood[]>('foods');

  return (
    <Container>
      <h3>{category_title}</h3>

      <FoodsContainer>
        {data?.map(food => (
          <Food foodData={food} key={food.id} isMenuContainer />
        ))}
      </FoodsContainer>
    </Container>
  );
}
