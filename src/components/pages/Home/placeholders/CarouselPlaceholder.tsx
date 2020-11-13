import Skeleton from 'react-loading-skeleton';

interface IPlaceHolderProps {
  repeatCount: number;
}

export default function CarouselPlaceHolder({
  repeatCount,
}: IPlaceHolderProps) {
  const howMany = Array.from(Array(repeatCount).keys());

  return (
    <>
      {howMany.map(placeholder => (
        <div className="item" key={placeholder}>
          <figure>
            <Skeleton width={400} height={200} />
          </figure>
        </div>
      ))}
    </>
  );
}
