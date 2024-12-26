import Image from 'next/image';

interface GallCardProps {
    image: string,
    title: string
}
const GalleryCards: React.FC<GallCardProps> = ({ image, title }) => {
  return (
    <div className="text-center rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative w-full h-80">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mt-2 mb-4">{title}</h3>
    </div>
  );
};
export default GalleryCards;
