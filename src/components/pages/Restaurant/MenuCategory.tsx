import { useAxios } from '../../../hooks/useAxios';
import {
  Container,
  FoodsContainer,
} from '../../../styles/components/pages/Restaurant/MenuCategory';
import FoodPlaceHolder from './placeholders/FoodPlaceholder';
import Food from './Food';

interface IMenuCategoryProps {
  category_title: string;
}

interface IFood {
  id: string;
  title: string;
  image_url: string;
  description: string;
  price: number;
}

export default function MenuCategory({ category_title }: IMenuCategoryProps) {
  const { data } = useAxios<IFood[]>('foods');

  if (!data) {
    return (
      <Container>
        <h3>{category_title}</h3>

        <FoodsContainer>
          <FoodPlaceHolder repeatCount={4} isMenuContainer />
        </FoodsContainer>
      </Container>
    );
  }

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
