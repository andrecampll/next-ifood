import { useCallback, useState } from 'react';
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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [foodId, setFoodId] = useState('');

  const toggleModal = useCallback(
    (foodId?: string) => {
      setIsOpenModal(!isOpenModal);
      setFoodId(foodId);
    },
    [isOpenModal],
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
        <Food
          foodData={food}
          key={food.id}
          toggleModal={() => toggleModal(food.id)}
        />
      ))}
      <FoodModal
        isOpen={isOpenModal}
        toggleModal={toggleModal}
        foodId={foodId}
      />
    </Container>
  );
}
