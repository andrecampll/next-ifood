import { Container } from '../styles/components/MobileMenu';
import { FiHome, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function MobileMenu() {
  let windowWidth = 960;

  if (typeof window !== 'undefined') {
    const { width } = useWindowDimensions();

    windowWidth = width;
  }

  return (
    <>
      {
        windowWidth >= 960 ? (
          <> </>
        ) : (
          <Container>
            <div>
              <a>
                <FiHome size={20} color="#3e3e3e" />
                <span>
                  Início
                </span>
              </a>
              <a>
                <FiSearch size={20} />
                <span>
                  Buscar
                </span>
              </a>
              <a>
                <FiShoppingCart size={20} />
                <span>
                  Pedidos
                </span>
              </a>
              <a>
                <FiUser size={20} />
                <span>
                  Perfil
                </span>
              </a>
            </div>
          </Container>
        )
      }
    </>
  )
}
