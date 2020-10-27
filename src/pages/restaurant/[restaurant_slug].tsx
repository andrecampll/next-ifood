import { useRouter } from 'next/router';

export default function RestaurantPage() {
  const router = useRouter();

  const { restaurant_slug } = router.query;

  return <div>{restaurant_slug}</div>;
}
