import React, { useCallback } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../store/ducks/foodModal';
import { Container } from '../../../styles/components/pages/Restaurant/Food';
import { formatPrice } from '../../../utils/format';

interface IFoodProps {
  foodData?: {
    id: string;
    title: string;
    image_url: string;
    description: string;
    price: number;
    formattedPrice?: string;
  };
  isMenuContainer?: boolean;
  loading?: boolean;
}

const Food: React.FC<IFoodProps> = ({ foodData, isMenuContainer, loading }) => {
  const { id, title, image_url, description } = foodData;

  const dispatch = useDispatch();

  const data = {
    ...foodData,
    formattedPrice: formatPrice(foodData.price),
  };

  const handleToggleModal = useCallback(
    (foodId: string) => {
      dispatch(toggleModal(foodId));
    },
    [dispatch],
  );

  return (
    <>
      {loading ? (
        <Container isMenuContainer={isMenuContainer}>
          <div className={isMenuContainer ? 'flex-container' : ''}>
            <header>
              <Skeleton
                width={isMenuContainer ? 120 : 270}
                height={isMenuContainer ? 90 : 157}
              />
            </header>
            <main>
              <h4>
                <Skeleton width={200} height={18} />
              </h4>

              <p>
                <Skeleton width={100} height={16} />
              </p>

              <h5>
                <Skeleton width={50} height={20} />
              </h5>
            </main>
          </div>
        </Container>
      ) : (
        <Container
          isMenuContainer={isMenuContainer}
          onClick={() => handleToggleModal(id)}
        >
          <div className={isMenuContainer ? 'flex-container' : ''}>
            <header>
              <img src={image_url} alt={title} />
            </header>
            <main>
              <h4>{title}</h4>

              <p>{description}</p>

              <h5>{data.formattedPrice}</h5>
            </main>
          </div>
        </Container>
      )}
    </>
  );
};

export default Food;
