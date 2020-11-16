import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import api from '../../../services/api';
import { addFoodToCartRequest } from '../../../store/ducks/cart';
import { IFood } from '../../../store/ducks/cart/types';
import {
  Container,
  Button,
} from '../../../styles/components/pages/Restaurant/FoodModal';
import { formatPrice } from '../../../utils/format';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '0',
    padding: '0',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.6)',
  },
};

Modal.setAppElement('#__next');

interface IModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  foodId?: string;
  food_quantity?: number;
}

interface IFoodLocal extends IFood {
  formattedPrice: string;
}

export default function FoodModal({
  isOpen,
  toggleModal,
  foodId,
  food_quantity = 0,
}: IModalProps) {
  const [modalIsOpen, setIsOpen] = useState(isOpen);
  const [food, setFood] = useState<IFoodLocal>({} as IFoodLocal);
  const [foodQuantity, setFoodQuantity] = useState(food_quantity);

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    async function loadFood() {
      const { data } = await api.get<IFood>(`foods/${foodId}`);

      const food = {
        ...data,
        formattedPrice: formatPrice(data.price),
      };

      setFood(food);
    }

    if (foodId.length) {
      loadFood();
    }
  }, [foodId]);

  const handleAddFoodToCart = useCallback(
    (food: IFood) => {
      const { restaurant_slug } = router.query;
      dispatch(addFoodToCartRequest(food, restaurant_slug));
    },
    [dispatch, router.query],
  );

  const handleIncrement = useCallback(() => {
    setFoodQuantity(foodQuantity + 1);
  }, [setFoodQuantity, foodQuantity]);

  const handleDecrement = useCallback(() => {
    setFoodQuantity(foodQuantity === 0 ? foodQuantity : foodQuantity - 1);
  }, [setFoodQuantity, foodQuantity]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={toggleModal}
      style={customStyles}
    >
      <Container>
        <aside>
          <img src={food.image_url} alt={food.title} className="blur" />
          <img src={food.image_url} alt={food.title} className="food-cover" />
        </aside>
        <main>
          <header>
            <FiX size={25} color="#666" onClick={toggleModal} />
          </header>
          <div>
            <h1>{food.title}</h1>
            <p>{food.description}</p>
            <strong>{formatPrice(food.price)}</strong>
            <div className="comments">
              <h2>Algum comentário?</h2>
              <span>0/140</span>
            </div>
            <textarea
              placeholder="Ex: tirar a cebola, maionese à parte"
              maxLength={140}
            />
          </div>
          <footer>
            <div>
              <Button
                type="button"
                onClick={handleDecrement}
                disabledField={foodQuantity === 0}
              >
                <FiMinus fill=" #ea1d2c" size={20} />
              </Button>
              <input type="number" readOnly value={foodQuantity} />
              <Button type="button" onClick={handleIncrement}>
                <FiPlus fill=" #ea1d2c" size={20} />
              </Button>
            </div>

            <button
              type="button"
              className="buy-action"
              onClick={() => handleAddFoodToCart(food)}
            >
              <span>Adicionar</span>
              <span>{formatPrice(foodQuantity * food.price)}</span>
            </button>
          </footer>
        </main>
      </Container>
    </Modal>
  );
}
