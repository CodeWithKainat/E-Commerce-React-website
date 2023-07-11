import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Loader from '../Components/Loader';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((json) => setProducts(json.data.products))
      .finally(() => setIsLoading(false));
    }, [categoryName]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1 className='Category-heading'data-aos="flip-left">{categoryName.toUpperCase()}</h1>
        <p className="category-para" data-aos="flip-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officia nihil! Nemo sunt reprehenderit
          voluptates amet itaque libero in unde, molestias illo veniam, dolore veritatis eaque ipsum. Molestiae, nam
          architecto!
        </p>
      </div>

      <div className="row">
        {isLoading ? (
          <div className="text-center">
            <Loader/>
          </div>
        ) : (
          products.map((val, key) => (
            <div className="col-6 my-4" data-aos="fade-up" key={key}>
              <Link className="text-decoration-none" to={`/products/${val.id}`}>
                <Card>
                  <Card.Img variant="top" src={val.thumbnail} />
                  <Card.Body>
                    <Card.Title className='m-0'>
                    {val.title.split('').slice(0, 20).join(' ')}
                      {val.title.split('').length > 20 ? '...' : ''}
                    </Card.Title>
                    <Card.Text>
                      {val.description.split('').slice(0, 40).join(' ')}
                      {val.description.split('').length > 40 ? '...' : ''}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
