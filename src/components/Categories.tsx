import Link from 'next/link';
import { Container } from '../styles/components/Categories';
import CategoryPlaceHolder from './placeholders/CategoryPlaceHolder';
import { useAxios } from '../hooks/useAxios';

interface ICategory {
  id: number;
  title: string;
  image_url: string;
}

export default function Categories(): JSX.Element {
  const { data } = useAxios<ICategory[]>('categories');

  if (!data) {
    return (
      <Container className="scroll-box">
        <div role="list" className="scroll-box__wrapper">
          <CategoryPlaceHolder repeatCount={13} />
        </div>
      </Container>
    );
  }

  return (
    <Container className="scroll-box">
      <div role="list" className="scroll-box__wrapper">
        {data?.map(category => (
          <main role="listitem" key={category.title}>
            <figure>
              <Link href={`categories/${category.title}`}>
                <img src={category.image_url} alt={category.title} />
              </Link>
            </figure>
            <span>{category.title}</span>
          </main>
        ))}
      </div>
    </Container>
  );
}
