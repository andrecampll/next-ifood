import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '../styles/components/Categories';
import api from '../services/api';

interface ICategory {
  id: number,
  title: string,
  image_url: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories');

      setCategories(response.data);
    }

    loadCategories();
  }, []);

  return (
    <Container className="scroll-box">
      <div role="list" className="scroll-box__wrapper">
        {
          categories?.map(category => (
            <main role="listitem" key={category.title} >
              <figure>
                <Link href={`categories/${category.title}`}  >
                  <img
                    src={category.image_url}
                    alt={category.title}
                  />
                </Link>   
              </figure>
              <span>{category.title}</span>
            </main>
          ))
        }
      </div>
    </Container>
  )
}
