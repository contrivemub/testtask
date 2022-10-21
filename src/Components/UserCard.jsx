import React from "react";
import defaultPhoto from "../Assets/default-photo.png";

const UserCard = ({ photo, name, email, position, phone }) => {
  return (
    <article className='card'>
      <div className='user'>
        <div className='user-img'>
          <img src={photo ? photo : defaultPhoto} alt='profile' />
        </div>
        <p className='user-name'>{name}</p>
        <p className='user-postion'>{position}</p>
        <div className='email-container'>
          <div className='tooltip'>{email}</div>
          <p className='user-email'>{email}</p>
        </div>
        <p className='user-phone'>{phone}</p>
      </div>
    </article>
  );
};

export default UserCard;
