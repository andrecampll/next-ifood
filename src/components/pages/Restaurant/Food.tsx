import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container } from '../../../styles/components/pages/Restaurant/Food';

interface IFoodProps {
  foodData?: {
    id: string;
    title: string;
    image_url: string;
    description: string;
    price: string;
  };
  isMenuContainer?: boolean;
  loading?: boolean;
  toggleModal?: (foodId?: string) => void;
}

const Food: React.FC<IFoodProps> = ({
  foodData,
  isMenuContainer,
  loading,
  toggleModal,
}) => {
  const { id, title, image_url, price, description } = foodData;

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
          onClick={() => toggleModal(id)}
        >
          <div className={isMenuContainer ? 'flex-container' : ''}>
            <header>
              <img src={image_url} alt={title} />
            </header>
            <main>
              <h4>{title}</h4>

              <p>{description}</p>

              <h5>{price}</h5>
            </main>
          </div>
        </Container>
      )}
    </>
  );
};

export default Food;
