import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { FiHome, FiChevronDown, FiUser, FiShoppingBag, FiPercent } from 'react-icons/fi';
import { Container } from '../styles/components/Menu';

interface IMenuProps {
  toggleTheme: () => void;
}

export default function Categories({ toggleTheme }: IMenuProps) {
  // const { title, colors } = useContext(ThemeContext);

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

        {/* <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor="#333"
          onColor="#f5f5f5"
        /> */}
      </aside>
    </Container>
  )
}
