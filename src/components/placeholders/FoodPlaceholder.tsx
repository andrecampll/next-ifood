import Food from '../pages/Restaurant/Food';

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
    title: 'string',
    image_url: 'string',
    description: 'string',
    price: 'string',
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
