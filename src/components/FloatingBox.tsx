import { useCallback } from 'react';
import {
  connect,
  MapStateToProps,
  useDispatch,
  useSelector,
} from 'react-redux';
import { formatPrice } from '../utils/format';
import { IState } from '../store';
import { removeFoodFromCartSuccess } from '../store/ducks/cart';
import { ICartItem, ICartState } from '../store/ducks/cart/types';

import { Container } from '../styles/components/FloatingBox';
import Empty from './Empty';

interface IFloatingBoxProps {
  open?: boolean;
  itemsState?: ICartItem[];
}

function FloatingBox({ open, itemsState }: IFloatingBoxProps) {
  const { items } = useSelector<IState, ICartState>(state => state.cart);

  const dispatch = useDispatch();

  const handleRemoveFoodFromCart = useCallback(
    (foodId: string) => {
      dispatch(removeFoodFromCartSuccess(foodId));
    },
    [dispatch],
  );

  console.log(itemsState);

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
          <table>
            {items.map(item => (
              <>
                <header>
                  <span>Seu pedido em</span>
                  <h1>{item.restaurant_slug}</h1>
                  <h2>Ver Cardápio</h2>
                </header>
                <main key={item.food.id}>
                  <div className="flex-items">
                    <span>
                      {item.quantity}x {item.food.title}
                    </span>
                    <strong>{item.food.price}</strong>
                  </div>
                  <footer className="actions">
                    <button type="button" className="edit-action">
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveFoodFromCart(item.food.id)}
                    >
                      Remover
                    </button>
                  </footer>
                </main>
              </>
            ))}

            <div>
              <span>Subtotal</span>
              <span>R$16,00</span>
            </div>

            <div>
              <span>Taxa de entrega</span>
              <span>R$16,00</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>R$16,00</strong>
            </div>

            <button type="button" className="submit-button">
              Escolher forma de pagamento
            </button>
          </table>
        </>
      )}
    </Container>
  );
}

const mapStateToProps: MapStateToProps<any, any> = (state: IState) => ({
  itemsState: state.cart.items.map(item => ({
    ...item,
    subtotal: formatPrice(2 * 4),
  })),
});

export default connect(mapStateToProps)(FloatingBox);
