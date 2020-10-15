import { Container } from '../styles/components/Header';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import useWindowDimensions from '../hooks/useWindowDimensions';

import Input from './Input';
import Menu from './Menu';

export default function Header() {
  let windowWidth = 960;

  if (typeof window !== 'undefined') {
    const { width } = useWindowDimensions();

    windowWidth = width;
  }

  return (
    <Container>
      {
        windowWidth >= 960 ? (
          <div className="desktop" >
            <span>
              <svg className="logo" width="80" height="43" viewBox="0 0 80 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 24.258h6.09L9.498 7.472h-6.09L0 24.258zM3.947 4.836h6.087L11.016 0H4.922l-.975 4.836zM8.498 28.985h6.09l3.695-18.167h4.444l.7-3.346h-4.482l.154-.776c.286-1.431.751-3.096 3.047-3.096 1.361 0 2.665.148 3.93.68L26.77.744A13.22 13.22 0 0 0 22.381 0c-4.894 0-8.265 2.914-9.499 7.472h-2.114l-.662 3.346h2.084L8.498 28.985z"></path><path d="M27.79 24.633c7.19 0 12.18-6.569 12.18-11.927 0-3.902-3.688-5.608-7.195-5.608-7.89 0-12.183 7.063-12.183 11.927 0 3.902 3.726 5.608 7.198 5.608zM47 24.633c7.192 0 12.181-6.569 12.181-11.927 0-3.902-3.696-5.608-7.199-5.608-7.886 0-12.186 7.063-12.186 11.927 0 3.902 3.73 5.608 7.202 5.608M69.082 24.258h6.055L80 .374h-6.09l-1.451 7.097a12.51 12.51 0 0 0-2.46-.281c-5.966 0-11.391 7.588-11.391 13.011 0 2.231 1.45 4.43 3.912 4.43 3.5 0 5.921-1.712 6.932-3.317h.378l-.748 2.944zM50.322 36.91c-4.454 3.792-10.408 5.739-16.879 5.337-8.16-.502-13.816-6.82-14.954-13.227h.387c1.836 4.091 6.304 7.869 11.911 8.49 5.475.604 12.184-1.87 15.866-5.402l-4.13-3.124 12.263.036-2.639 12.983-1.825-5.093z"></path></svg>
            </span>
            <section className="input-section" >
              <Input icon={FiSearch} placeholder="Busque por item ou loja"/>
            </section>
            <Menu />
          </div>
        ) : (
          <div className="mobile" >
            <span>Entregar em</span>
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
