import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ICartState } from '../store/ducks/cart/types';

import { Container } from '../styles/components/FloatingBox';
import Empty from './Empty';

interface IFloatingBoxProps {
  open?: boolean;
}

export default function FloatingBox({ open }: IFloatingBoxProps) {
  const { items } = useSelector<IState, ICartState>(state => state.cart);

  return (
    <Container open={open}>
      {items.length === 0 ? (
        <>
          <Empty />
          <h3>Sua sacola está vazia</h3>
          <span>Adicione itens</span>
        </>
      ) : (
        <>
          <Empty />
          <h3>{items.length}</h3>
          <span>Adicione itens</span>
        </>
      )}
    </Container>
  );
}
