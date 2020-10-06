import { Container } from '../styles/components/Famous';
import Restaurant from '../components/Restaurant';

export default function Famous() {
  return (
    <Container>
      <div>
        <h4>Famosos no Ifood</h4>
        <ul>
          <Restaurant />
        </ul>
      </div>
    </Container>
  )
}
