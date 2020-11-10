import React from 'react';

import { Container } from '../styles/components/FloatingBox';
import Empty from './Empty';

interface IFloatingBoxProps {
  open?: boolean;
}

export default function FloatingBox({ open }: IFloatingBoxProps) {
  return (
    <Container open={open}>
      <Empty />
      <h3>Sua sacola está vazia</h3>
      <span>Adicione itens</span>
    </Container>
  );
}
