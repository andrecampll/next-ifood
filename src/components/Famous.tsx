import { Container } from '../styles/components/Famous';
import Restaurant from '../components/Restaurant';

export default function Famous() {
  return (
    <Container className="scroll-box">
      <header>
        <h4>Famosos no iFood</h4>
        <a href="">Ver mais</a>
      </header>
      <div role="list" className="scroll-box__wrapper" >
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </div>
    </Container>
  )
}
