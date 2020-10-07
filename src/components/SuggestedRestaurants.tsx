import { Container } from '../styles/components/SuggestedRestaurants';
import Restaurant from '../components/Restaurant';

export default function SuggestedRestaurants() {
  return (
    <Container>
      <div>
        <h4>Restaurantes e mercados</h4>

        <ul>
          <li>
            <Restaurant />
          </li>
          <li>
            <Restaurant />
          </li>
          <li>
            <Restaurant />
          </li>
          <li>
            <Restaurant />
          </li>
          <li>
            <Restaurant />
          </li>
        </ul>
      </div>
    </Container>
  )
}
