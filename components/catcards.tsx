import React from "react";

interface CatCardProps {
    image: string; 
    title: string; 
}

const CategoryCard: React.FC<CatCardProps>= ({ image, title }) => {
  return (
    //--=== CATEGORY CARD BG IMAGE ===--//
    <div
      className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/*--=== CATEGORY CARD TITLE OVER IMAGE ===--*/}
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CategoryCard;
