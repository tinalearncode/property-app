import React from 'react';
import { Card } from 'react-bootstrap';

import './PCard.css';

const PCard = ({ property }) => {
  return (
    <Card className="card" style={{ width: '18rem', margin: '2rem' }}>
      <Card.Img className="card-image" variant="top" src={property.images[0]} />
      <Card.Body className="card-body">
        <Card.Title>{`${property.suburb} $${property.price}`}</Card.Title>
        <Card.Text>
          <p>{property.type}</p>
          <p>{property.location}</p>
          <p>
            <span>{property.available}</span>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PCard;
