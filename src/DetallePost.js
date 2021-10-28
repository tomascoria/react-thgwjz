import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faHeart} />

const DetallePost = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/post/${id}`, {
        headers: { 'app-id': '61789327d081fff63c0da20d' },
      })
      .then((res) => {
        setItem(res.data);
      });
  }, []);

  return (
    <>
      {item && (
        <center>
        <div className="card2">
            <div className = "header">
              <img src={item.owner.picture} alt="" className="dueño" />
              <p> {item.owner.firstName} {item.owner.lastName}</p>
            </div>
            <img src={item.image} alt="" className="img" />
            <p className = "likes"> <FontAwesomeIcon icon = {faHeart} style = {{fontSize: "23px", color: "red"}}/> {item.likes} </p>
        </div>
        <br />
      </center>
      )}
    </>
  );
};
export default DetallePost;
