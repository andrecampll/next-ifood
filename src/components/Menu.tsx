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
          <FiHome size={16} />
          <h4>Av. Ceará, 1039</h4>
          <FiChevronDown size={16} />
        </div>
      </section>
      <aside>
        <FiPercent size={25} />
        <FiUser size={25} />
        <FiShoppingBag size={25} />
      </aside>
    </Container>
  )
}
