import React from 'react';

const GoodsCard = (props) => {
  const { image, name, price } = props;

  return (
    <div className="goods-card">
      <img className="goods-image" src={image} alt={name} />
      <h3>{name}</h3>
      <p className="goods-price">Ціна: {price} грн</p>
    </div>
  );
};

export default GoodsCard;