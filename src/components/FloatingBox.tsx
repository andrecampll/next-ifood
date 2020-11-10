import React from 'react';

import { Container } from '../styles/components/FloatingBox';
import Empty from './Empty';

export default function FloatingBox() {
  return (
    <Container>
      <Empty />
      <h3>Sua sacola está vazia</h3>
      <span>Adicione itens</span>
    </Container>
  );
}
