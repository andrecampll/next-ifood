import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Home from './lista-restaurantes';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push('lista-restaurantes');
  }, [router]);

  return <Home />;
}
