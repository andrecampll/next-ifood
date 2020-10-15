import Link from 'next/link';
import { Container } from '../styles/components/Categories';

export default function Categories() {
  return (
    <Container className="scroll-box">
      <div role="list" className="scroll-box__wrapper">
        <main role="listitem" >
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/groc_icon_alegre.png"
              alt="Mercado"
            />
          </figure>
          <span>Mercado</span>
        </main>

        <main role="listitem" >
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/Promo_cat.png"
              alt="Promoções"
            />
          </figure>
          <span>Promoções</span>
        </main>

        <main role="listitem" >
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/20C1_VR_Test_AB.png"
              alt="Vale Refeição"
            />
          </figure>
          <span>Vale-Refeição</span>
        </main>

        <main role="listitem" >
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-brasileira-v2.jpg"
              alt="Brasileira"
            />
          </figure>
          <span>Brasileira</span>
        </main>

        <main role="listitem" >
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-saudavel-v2.jpg"
              alt="Saudável"
            />
          </figure>
          <span>Saudável</span>
        </main>

        <main role="listitem" >
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-marmita.jpg"
              alt="Marmita"
            />
          </figure>
          <span>Marmita</span>
        </main>

        <main role="listitem" >
          <figure>
            <Link href="categories/Lanches"  >
              <img
                src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-lanches-v2.jpg"
                alt="Lanches"
              />
            </Link>   
          </figure>
          <span>Lanches</span>
        </main>
      
        <main role="listitem" >
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-japonesa.jpg"
              alt="Japonesa"
            />
          </figure>
          <span>Japonesa</span>
        </main>

        <main role="listitem" >
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-doces-e-bolos.jpg"
              alt="Doces & Bolos"
            />
          </figure>
          <span>Doces & Bolos</span>
        </main>

        <main role="listitem" >
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-italiana.jpg"
              alt="Italiana"
            />
          </figure>
          <span>Italiana</span>
        </main>

        <main role="listitem" >
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-carnes-v2.jpg"
              alt="Carnes"
            />
          </figure>
          <span>Carnes</span>
        </main>

        <main role="listitem" >
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-pizza.jpg"
              alt="Carnes"
            />
          </figure>
          <span>Pizza</span>
        </main>

        <main role="listitem" >
          <figure>
            <img
              src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-chinesa.jpg"
              alt="Chinesa"
            />
          </figure>
          <span>Chinesa</span>
        </main>
      </div>
    </Container>
  )
}
