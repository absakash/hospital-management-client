import React from 'react';
import flouride from '../assets/images/fluoride.png'
import cavity from '../assets/images/cavity.png'
import whitening from '../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const cards=[
        {
            id:1,
            name:'Fluoride Treatment',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptas.',
            img:flouride
        },
        {
            id:2,
            name:'Cavity Feeding',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptas.',
            img:cavity
        },
        {
            id:3,
            name:'Teeth Whiteing',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptas.',
            img:whitening
        },
    ]
    return (
        <div className='mt-16 p-5'>
            <div className='text-center'>
                <h2 className='text-primary uppercase text-xl font-bold'>Our Services</h2>
                <p className='text-3xl font-bold'>
                    Services We Provide
                </p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 '>
                {
                    cards.map(card=><Service
                    card={card} key={card.id}
                    ></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;