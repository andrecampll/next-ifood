import { Container } from '../styles/components/Famous';
import Restaurant from '../components/Restaurant';

export default function Famous() {
  return (
    <Container className="scroll-box">
      <h4>Famosos no iFood</h4>
      <div role="list" className="scroll-box__wrapper" >
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </div>
    </Container>
  )
}
