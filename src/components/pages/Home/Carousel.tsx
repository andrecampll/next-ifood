import { useState, useEffect } from 'react';
import api from '../../../services/api';
import { Container } from '../../../styles/components/pages/Home/Carousel';
import CarouselPlaceHolder from './placeholders/CarouselPlaceholder';

interface CarouselItem {
  image_url: string;
  alt: string;
}

export default function Carousel(): JSX.Element {
  const [carrouselItems, setCarrouselItems] = useState<CarouselItem[]>([]);

  useEffect(() => {
    async function loadCarousel() {
      const response = await api.get('carousel');

      setCarrouselItems(response.data);
    }

    loadCarousel();
  }, []);

  return (
    <Container id="items-wrapper">
      <div id="items">
        {carrouselItems.length === 0 ? (
          <CarouselPlaceHolder repeatCount={4} />
        ) : (
          carrouselItems.map(item => (
            <div className="item" key={item.alt}>
              <figure>
                <img src={item.image_url} alt={item.alt} />
              </figure>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}
