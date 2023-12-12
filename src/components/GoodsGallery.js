import React from 'react';
import GoodsCard from './GoodsCard';

const GoodsGallery = () => {
  const fruitsList = [
    { id: 0, image: 'https://t3.ftcdn.net/jpg/01/76/97/96/240_F_176979696_hqfioFYq7pX13dmiu9ENrpsHZy1yM3Dt.jpg', name: 'Яблуко', price: 30 },
    { id: 1, image: 'https://t3.ftcdn.net/jpg/01/74/93/80/240_F_174938002_zvgqpU18283OpwpHCA1hrfItZ76sMuMB.jpg', name: 'Банан', price: 20 },
    { id: 2, image: 'https://t3.ftcdn.net/jpg/00/56/01/00/240_F_56010077_UA98ADMw95rEB2hCuAlFOJkjdirrAAPV.jpg', name: 'Апельсин', price: 25 },
    { id: 3, image: 'https://t3.ftcdn.net/jpg/00/43/56/78/240_F_43567865_xemC7CMGpmDtuuL62dYLzABgJwWqC7y0.jpg', name: 'Ківі', price: 40 },
    { id: 4, image: 'https://t4.ftcdn.net/jpg/02/09/54/53/240_F_209545315_9iFm7lXcpwkAhYsHTw0gOJGzF0OTPsrO.jpg', name: 'Манго', price: 50 },
    { id: 5, image: 'https://t4.ftcdn.net/jpg/02/73/48/81/240_F_273488191_apKUSK7zF150VEJ1Jwnut9NZKtsHGjOg.jpg', name: 'Ананас', price: 35 },
    { id: 6, image: 'https://t3.ftcdn.net/jpg/00/42/34/30/240_F_42343029_y7q7yWDO1hrmuZuIcmRqoaeI4IcjecIT.jpg', name: 'Груша', price: 30 },
    { id: 7, image: 'https://t4.ftcdn.net/jpg/01/41/26/43/240_F_141264349_rrfic2ftouBkNvRjBsxM5KmAP3JndQXL.jpg', name: 'Грейпфрут', price: 25 },
    { id: 8, image: 'https://t4.ftcdn.net/jpg/02/55/39/77/240_F_255397744_rwNCund3WjKsrsv6yKKpK8tzmJ8sYRnF.jpg', name: 'Лимон', price: 25 },
    { id: 9, image: 'https://t4.ftcdn.net/jpg/00/53/70/31/240_F_53703182_zAOjMpa0eqxWGOtwYymPWI6JPcEBpRQf.jpg', name: 'Слива', price: 20}
  ];

  return (
    <div className="goods-gallery">
      {fruitsList.map((fruit) => (
        <GoodsCard
          key={fruit.id}
          image={fruit.image}
          name={fruit.name}
          price={fruit.price}
        />
      ))}
    </div>
  );
};

export default GoodsGallery;
