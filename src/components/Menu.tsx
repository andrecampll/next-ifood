import Switch from 'react-switch';

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
        <div>
          <FiPercent size={25} />
          <h5>Promoções</h5>
        </div>
        
        <div>
          <FiUser size={25} />
          <h5>Perfil</h5>
        </div>

        <div>
          <FiShoppingBag size={25} />
          <h5>Sacola</h5>
        </div>

        <Switch
          onChange={() => {}}
          checked={false}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor="#fff"
          onColor="#000"
        />
      </aside>
    </Container>
  )
}
