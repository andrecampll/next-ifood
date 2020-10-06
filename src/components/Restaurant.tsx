import { Container } from '../styles/components/Restaurant';
import { FiChevronRight } from 'react-icons/fi';

export default function Restaurant() {
  return (
    <Container>
      <div>
        <figure>
          <img
            src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/cfa433b7-eed4-4630-998e-c599623b08b3/202003190923_3A3w_i.jpg"
            alt="Batistão"
          />
        </figure>
        <aside></aside>
        <main>
          <h5>Batistão Duque</h5>
          <span>
            4.6  •  Lanches  •  1,77 km
          </span>
          <span>
            40 - 50 min •
          </span>
        </main>
      </div>
    </Container>
  )
}
