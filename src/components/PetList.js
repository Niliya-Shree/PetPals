import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const { data } = await axios.get('/api/pets');
      setPets(data);
    };

    fetchPets();
  }, []);

  return (
    <div>
      <h1>Available Pets</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet._id}>
            <h2>{pet.name}</h2>
            <p>{pet.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
