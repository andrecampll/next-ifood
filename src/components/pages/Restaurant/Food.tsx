import { Container } from '../../../styles/components/pages/Restaurant/Food';

interface IFoodProps {
  foodData: {
    title: string;
    image_url: string;
    description: string;
    price: string;
  };
}

export default function Food({ foodData }: IFoodProps) {
  const { title, image_url, price, description } = foodData;

  return (
    <Container>
      <div>
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
