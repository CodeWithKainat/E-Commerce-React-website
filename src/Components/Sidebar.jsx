import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://dummyjson.com/products/categories')
      .then(json => {
        setCategories(json.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <ul className='list-group p-0 w-100'>
      {categories.map((val, key) => (
          <Link className='text-decoration-none' to={`/products/category/${val}`}>
        <li className='list-group-item' key={key}>
            {val.toUpperCase().replace('-', ' ')}
        </li>
          </Link>
      ))}
    </ul>
  );
}

export default Sidebar;
