import { useCallback, useState } from 'react';
import {
  FiHome,
  FiChevronDown,
  FiUser,
  FiShoppingBag,
  FiPercent,
} from 'react-icons/fi';
import { Container } from '../styles/components/Menu';
import FloatingBox from './FloatingBox';
import useGeolocation from '../hooks/useGeolocation';

export default function Categories() {
  const [openOption, setOpenOption] = useState(false);

  const toggleOption = useCallback(() => {
    setOpenOption(!openOption);
  }, [openOption]);

  const { address } = useGeolocation();

  return (
    <Container>
      <section>
        <span>Entregar em</span>
        <div>
          <FiHome size={18} />
          <h4>{address}</h4>
          <FiChevronDown size={16} />
        </div>
      </section>
      <aside>
        <div>
          <button type="button">
            <FiPercent size={25} />
            <h5>Promoções</h5>
          </button>
        </div>

        <div>
          <button type="button">
            <FiUser size={25} />
            <h5>Perfil</h5>
          </button>
        </div>

        <div>
          <button type="button" onClick={toggleOption}>
            <FiShoppingBag size={25} />
            <h5>Sacola</h5>
          </button>
          <FloatingBox open={openOption} />
        </div>
      </aside>
    </Container>
  );
}
