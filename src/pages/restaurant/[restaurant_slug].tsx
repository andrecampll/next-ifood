import { useRouter } from "next/router"

export default function index() {
  const router = useRouter();

  const { restaurant_slug } = router.query;

  return (
    <div>{restaurant_slug}</div>
  );
}
