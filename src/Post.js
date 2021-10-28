import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faHeart} />
import './style.css';

const Post = (props) => {
  const [item, setItem] = useState(props.item);

  return (
    <center>
      <div className="card2">
        <Link to={`/usuarios/${item.id}`} style={{ textDecoration: 'none', color: '#000' }}>
          <div className = "header">
            <img src={item.owner.picture} alt="" className="dueño" />
            <p> {item.owner.firstName} {item.owner.lastName}</p>
          </div>
          <img src={item.image} alt="" className="img" />
          <p className = "likes"> <FontAwesomeIcon icon = {faHeart} style = {{fontSize: "23px", color: "red"}}/> {item.likes} </p>
        </Link>
      </div>
      <br />
    </center>
  );
};
export default Post;
