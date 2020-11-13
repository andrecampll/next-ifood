import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';

interface IPlaceHolderProps {
  repeatCount: number;
}

export default function CategoryPlaceHolder({
  repeatCount,
}: IPlaceHolderProps) {
  const howMany = Array.from(Array(repeatCount).keys());

  return (
    <>
      {howMany.map(placeholder => (
        <main
          role="listitem"
          key={placeholder}
          className="placeholder-container"
        >
          <figure>
            <Link href="#">
              <Skeleton height={111} width={110} className="placeholder" />
            </Link>
          </figure>
          <span className="placeholder-title">
            <Skeleton height={18} width={63} />
          </span>
        </main>
      ))}
    </>
  );
}
