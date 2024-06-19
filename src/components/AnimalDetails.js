import React from 'react';
import { useParams } from 'react-router-dom';

const AnimalDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Animal Details</h2>
      <p>Details for animal with ID: {id}</p>
      {/* Add more detailed information about the animal here */}
    </div>
  );
};

export default AnimalDetails;
