import { Container } from '../styles/components/Carousel';

export default function Carousel() {
  return (
    <Container id="items-wrapper" >
      <div id="items" >
        <div className="item">
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload//discoveries/mercado-entregagratis.png"
              alt="Mercado"
            />
          </figure>
        </div>
        <div className="item">
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload//discoveries/mercado-entregagratis.png"
              alt="Mercado"
            />
          </figure>
        </div>
        <div className="item">
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload//discoveries/mercado-entregagratis.png"
              alt="Mercado"
            />
          </figure>
        </div>
        <div className="item">
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload//discoveries/mercado-entregagratis.png"
              alt="Mercado"
            />
          </figure>
        </div>
      </div>
    </Container>
  )
}
