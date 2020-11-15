import Food from '../Food';

interface IPlaceHolderProps {
  repeatCount: number;
  isMenuContainer?: boolean;
}

export default function FoodPlaceHolder({
  repeatCount,
  isMenuContainer,
}: IPlaceHolderProps) {
  const howMany = Array.from(Array(repeatCount).keys());

  const foodData = {
    id: 'string',
    title: 'string',
    image_url: 'string',
    description: 'string',
    price: 0,
  };

  return (
    <>
      {howMany.map(placeholder => (
        <Food
          key={placeholder}
          foodData={foodData}
          loading
          isMenuContainer={isMenuContainer}
        />
      ))}
    </>
  );
}
