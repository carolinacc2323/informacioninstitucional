import React from 'react';
import { Helmet } from 'react-helmet';
import './TeamCard.css';

const TeamCard = ({ title, description, image, text }) => {
  return (
    <>
      <div className="container" >
        <Helmet>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            defer
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
            defer
          ></script>
        </Helmet>
        <div className="card1">
          <div className="circle"></div>
          <div className="content">
            <h5>{title}</h5>
            <p>{description}</p>
            <p>{text}</p>
          </div>
          <img width="150" src={image} alt={title} />
        </div>
      </div>
    </>
  );
};

export default TeamCard;
