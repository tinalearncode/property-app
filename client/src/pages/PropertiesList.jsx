import React, { useState, useEffect } from 'react';
import api from '../api';
import { Container, Row, Col, Button } from 'react-bootstrap';

import PCard from './../components/PCard';
import quickSort from '../utilities/quicksort';

const PropertiesList = () => {
  const initIsSorted = { price: false, suburb: false };

  const [properties, setProperties] = useState([]);
  const [isSorted, setIsSorted] = useState(initIsSorted);
  const [isLoading, setIsLoading] = useState(true);

  let length = properties.length;

  const sortBy = key => {
    if (!isSorted[key]) {
      let sorted = quickSort(properties, key, 0, length - 1);
      setProperties(sorted);
      setIsSorted(initIsSorted => {
        return { ...initIsSorted, key: true };
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getAllProperties();
      setProperties(data.data.data);
      setIsLoading(false);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <Container style={{ width: '100%', margin: '0', paddingTop: '6rem' }}>
      <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button className="m-2" onClick={() => sortBy('price')}>
          Sort by Price
        </Button>
        <Button className="m-2" onClick={() => sortBy('suburb')}>
          Sort by Suburb
        </Button>
      </Container>

      <Row>
        {isLoading ? (
          <p>...</p>
        ) : (
          properties.map(property => (
            <Col md={6} lg={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PCard key={property._id} property={property} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default PropertiesList;
