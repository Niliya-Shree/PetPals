import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PetProfile = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({});

  useEffect(() => {
    const fetchPet = async () => {
      const { data } = await axios.get(`/api/pets/${id}`);
      setPet(data);
    };

    fetchPet();
  }, [id]);

  return (
    <div>
      <h1>{pet.name}</h1>
      <p>{pet.description}</p>
    </div>
  );
};

export default PetProfile;
