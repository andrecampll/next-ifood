import { Container } from '../../../styles/components/pages/Restaurant/Food';

interface IFoodProps {
  foodData: {
    title: string;
    image_url: string;
    description: string;
    price: string;
  };
  isMenuContainer?: boolean;
}

export default function Food({ foodData, isMenuContainer }: IFoodProps) {
  const { title, image_url, price, description } = foodData;

  return (
    <Container isMenuContainer={isMenuContainer}>
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
  );
}
