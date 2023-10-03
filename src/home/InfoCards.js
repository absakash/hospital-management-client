import React from 'react';
import clock from '../assets/icons/clock.svg'
import marker from '../assets/icons/marker.svg'
import phone from '../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {

    const cardDate=[
        {
            id:1,
            name:"Opening Hours",
            description:"Open 9.00 am to 5.00 pm everyday",
            icon :clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id:2,
            name:"Our Location",
            description:"Open 9.00 am to 5.00 pm everyday",
            icon :marker,
            bgClass: 'bg-neutral'
        },
        {
            id:3,
            name:"Contack us",
            description:"Open 9.00 am to 5.00 pm everyday",
            icon :phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]

    return (
        <div className='p-5 grid mt-10 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5'>
            {
                cardDate.map(card=><InfoCard
                     key={card.id}
                      card={card}
                     
                     
                     ></InfoCard>)
            }

         
        </div>
    );
};

export default InfoCards;