import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from './Post.js';

const ListadoPost = () => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/post?limit=10`, {
        headers: { 'app-id': '61789327d081fff63c0da20d' },
      })
      .then((res) => {
        setResponse(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Lista</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div>
        {response?.data?.map((item) => {
          return <Post item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
export default ListadoPost;
