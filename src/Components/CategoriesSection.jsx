import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import 'aos/dist/aos.css'
import AOS from 'aos';
export default function CategoriesSection() {

    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([])

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://dummyjson.com/products/categories').then(json => {setCategories(json.data);  setIsLoading(false); console.log(categories)})
   
  }, [])

  useEffect (()=>{
    AOS.init({duration:1500})
           },[])

  return (
    
    <div className="container">
      <div className="my-4 text-center" data-aos="fade-up" >
        <img className='catimg' src="https://www.onlinehaendler-news.de/images/2018/04/shutterstock_382783252.jpg" alt="" />
        <h1 className=' catheading mt-4'>CATEGORIES</h1>
        <p className='catpara'> Discover a world of endless possibilities at our shopping website. From stylish fashion trends to innovative electronics, we have everything you need to stay ahead of the curve.So start exploring now and make every purchase a delightful experience.</p>
      </div>
  
      {isLoading === true ? (
        <Loader />
      ) : (
        <div className="row">
          {categories.map((val, key) => (
            <div className="col-md-4 my-3" data-aos="fade-up" key={key}>
              <Link className='text-decoration-none' to={`/products/category/${val}`}>
                <Card>
                  {console.log(val)}
                  <Card.Body className='Category-card'>
                    <Card.Title>{key + 1} - {val.toUpperCase().replace('-', ' ')}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
