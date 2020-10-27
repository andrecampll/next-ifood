import Link from 'next/link';
import Empty from '../components/Empty';

import { Container } from '../styles/pages/404';

export default function NotFound() {
  return (
    <Container>
      <Empty />
      <span role="img" aria-label="emoji of doubt">
        Página não encontrada 🧐
      </span>
      <Link href="/lista-restaurantes">
        <span role="img" aria-label="emoji of happiness">
          Você está perdido? Clique aqui e volte para a home! 😊
        </span>
      </Link>
    </Container>
  );
}
