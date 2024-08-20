import React from 'react';

function Card(props) {
    const { title, url, description, price } = props;
    return (
    <div className="card">
      <img src={`/images/${url}`} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
}

export default Card;