type StoreLogoProps = {
  image: string;
  name: string;
};

const StoreLogo = ({ image, name }: StoreLogoProps) => {
  return (
    <div className="bookstore-image-wrapper">
      <img src={image} alt={name} className="bookstore-image" />
    </div>
  );
};

export default StoreLogo;
