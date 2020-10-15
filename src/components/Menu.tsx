import { FiHome, FiChevronDown, FiUser, FiShoppingBag, FiPercent } from 'react-icons/fi';
import { Container } from '../styles/components/Menu';

export default function Categories() {
  return (
    <Container>
      <section>
        <span>
          Entregar em
        </span>
        <div>
          <FiHome size={18} />
          <h4>Av. Ceará, 1039</h4>
          <FiChevronDown size={16} />
        </div>
      </section>
      <aside>
        <FiPercent size={25} />
        <h5>Promoções</h5>

        <FiUser size={25} />
        <h5>Perfil</h5>

        <FiShoppingBag size={25} />
        <h5>Sacola</h5>
      </aside>
    </Container>
  )
}
