import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useAxios } from '../../../hooks/useAxios';
import { Container } from '../../../styles/components/pages/Restaurant/Carousel';
import Food from './Food';
import FoodPlaceholder from '../../placeholders/FoodPlaceholder';
import { addFoodToCartRequest } from '../../../store/modules/cart/actions';

interface IFood {
  id: string;
  title: string;
  image_url: string;
  description: string;
  price: string;
}

export default function Carousel() {
  const { data } = useAxios<IFood[]>('foods');

  const dispatch = useDispatch();

  const handleAddFoodToCart = useCallback(
    (food: IFood) => {
      dispatch(addFoodToCartRequest(food));
    },
    [dispatch],
  );

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
        <>
          <Food foodData={food} key={food.id} />
          <button type="button" onClick={() => handleAddFoodToCart(food)}>
            Adicionar
          </button>
        </>
      ))}
    </Container>
  );
}
