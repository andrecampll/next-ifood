import Skeleton from 'react-loading-skeleton';

interface IPlaceHolderProps {
  repeatCount: number;
  href?: string;
}

export default function CategoryPlaceHolder({
  repeatCount,
  href = '#',
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
            <a href={href}>
              <Skeleton height={111} width={110} className="placeholder" />
            </a>
          </figure>
          <span className="placeholder-title">
            <Skeleton height={18} width={63} />
          </span>
        </main>
      ))}
    </>
  );
}
