import Link from "next/link";
import Empty from "../components/Empty";

import { Container } from '../styles/pages/404';

export default function NotFound() {
  return (
    <Container>
      <Empty />
      <p>Página não encontrada 🧐</p>
      <Link href="/lista-restaurantes">
        Você está perdido? Clique aqui e volte para a home! 😊
      </Link>
    </Container>
  )
}
