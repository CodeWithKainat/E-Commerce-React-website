import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import CarouselImage from '../Components/Carousel'
import Card from 'react-bootstrap/Card';
import 'aos/dist/aos.css'
import AOS from 'aos';
import Loader from '../Components/Loader';

export default function Products() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://dummyjson.com/products').then((response) => {
      console.log(response.data.products);
      setData(response.data.products);
      setIsLoading(false);
    });
  }, []);
  useEffect (()=>{
    AOS.init({duration:1500})
           },[])

  return (
    <>
      <CarouselImage />
      <div className='container my-4'>
        {isLoading === true ? (
          <Loader/>
        ) : (
          <div className="row mt-4">
            {data.map((val, key) => (
              <div className="col-6 col-lg-4 my-3"  data-aos="fade-up" key={key}>
                <Link className='text-decoration-none' to={`/products/${val.id}`}>
                  <Card>
                    <Card.Img variant="top" className='imgsize ' src={val.thumbnail} />
                    <Card.Body>
                      <Card.Title>{val.title}</Card.Title>
                      <Card.Text>
                        {val.description.split(' ').slice(0, 7).join(' ')}
                        {val.description.split(' ').length > 7 ? '...' : ''}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">{val.rating}</small>
                    </Card.Footer>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
 