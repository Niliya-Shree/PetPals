import React, { useState } from 'react';
import { Carousel, Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './Home.css';

// Import images
import image1 from './images/img1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';
import image4 from './images/img4.jpg';
import image5 from './images/img5.jpg';
import animalImage1 from './images/animal1.jpg'; // Example animal images
import animalImage2 from './images/animal2.jpg';
import animalImage3 from './images/animal3.jpg';
import animalImage4 from './images/animal4.jpg';
import animalImage5 from './images/animal5.jpg';
import animalImage6 from './images/animal6.jpg';


const carouselItems = [
  {
    id: 1,
    image: image1,
    caption: 'A dog is the only thing on earth that loves you more than you love yourself',
  },
  {
    id: 2,
    image: image2,
    caption: 'Until one has loved an animal a part of one\'s soul remains unawakened.',
  },
  {
    id: 3,
    image: image3,
    caption: 'Scratch a dog and you\'ll find a permanent job.',
  },
  {
    id: 4,
    image: image4,
    caption: 'Time spent with cats is never wasted.',
  },
  {
    id: 5,
    image: image5,
    caption: 'Dogs laugh, but they laugh with their tails.',
  },
  
  // Add more carousel items as needed
];
const animalCards = [
  { id: 1, image: animalImage1, title: 'Dogs' },
  { id: 2, image: animalImage2, title: 'Cats' },
  { id: 3, image: animalImage3, title: 'Rabbits' },
  { id: 4, image: animalImage4, title: 'Hamsters' },
  { id: 5, image: animalImage5, title: 'Goats' },
  { id: 6, image: animalImage6, title: 'Sheeps' },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search Term:', searchTerm);
  };

  return (
    <Container fluid className="p-0 carousel-container">
      <Row>
        <Col>
          <div className="search-bar-container">
            <Form className="d-flex justify-content-center">
              <Form.Control
                type="text"
                placeholder="Search for pets"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '500px', marginRight: '10px' }}
              />
              <Button variant="primary" onClick={handleSearch}>
                <Search />
              </Button>
            </Form>
          </div>
          <Carousel>
            {carouselItems.map(item => (
              <Carousel.Item key={item.id}>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt={item.caption}
                />
                <Carousel.Caption>
                  <h3>{item.caption}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Container className="mt-4">
        <h2 className="text-center">Animals</h2>
        <Row>
          {animalCards.map(animal => (
            <Col key={animal.id} sm={12} md={5} lg={4} className="mb-4">
              <Link to={`/animal/${animal.id}`} className="text-decoration-none">
              <Card>
                <Card.Img variant="top" src={animal.image} />
                <Card.Body>
                  <Card.Title>{animal.title}</Card.Title>
                  <Card.Text>{animal.description}</Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
