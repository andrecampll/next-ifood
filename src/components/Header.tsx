import { Container } from '../styles/components/Header';
import { FiChevronDown } from 'react-icons/fi';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Header() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      {
        width < 960 ? (
          <div className="mobile" >
            <span>Entregar em</span>
            <main>
              <h3>Av. Ceará, 1039</h3>
              <FiChevronDown color="#ea1d2c" size={18} />
            </main>
          </div>
        ) : (
          <div className="desktop" >
            <span>Desktop</span>
            <main>
              <h3>Av. Ceará, 1039</h3>
              <FiChevronDown color="#ea1d2c" size={18} />
            </main>
          </div>
        )
      }
    </Container>
  )
}
