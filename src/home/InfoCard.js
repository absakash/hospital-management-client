import React from 'react';

const InfoCard = ({card}) => {
    const {description,icon,bgClass,name}=card
    return (
        <div className={`md:p-4 p-5 card text-white md:card-side  shadow-xl ${bgClass}`}>
        <figure><img src={icon} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
        </div> 
      </div>
    );
};

export default InfoCard;