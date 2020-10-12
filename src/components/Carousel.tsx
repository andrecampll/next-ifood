import { useState, useEffect } from 'react';
import { Container } from '../styles/components/Carousel';

interface CarouselItem {
  image_url: string;
  alt: string;
}

export default function Carousel() {
  const [carrouselItems, setCarrouselItems] = useState<CarouselItem[]>([]);

  useEffect(() => {
    setCarrouselItems([
      {
        image_url:"https://static-images.ifood.com.br/image/upload//discoveries/mercado-entregagratis.png",
        alt:"Mercado",
      },
      {
        image_url:"https://static-images.ifood.com.br/image/upload//discoveries/ifood_capas_rest_entrega_gratis_abr_20.png",
        alt:"Entrega Grátis",
      },
      {
        image_url:"https://static-images.ifood.com.br/image/upload//discoveries/20C1_abb.png",
        alt:"Descobertas"
      },
      {
        image_url:"https://static-images.ifood.com.br/image/upload//discoveries/jul_20_70off.jpg",
        alt:"Mercado"
      }
    ]);
  }, []);

  return (
    <Container id="items-wrapper" >
      {/* <aside>
        <button></button>
        <button></button>
      </aside> */}
      <div id="items" >
        {
          carrouselItems.map(item => (
            <div className="item" key={item.alt} >
              <figure>
                <img
                  src={item.image_url}
                  alt={item.alt}
                />
              </figure>
            </div>
          ))
        }
      </div>
    </Container>
  )
}
