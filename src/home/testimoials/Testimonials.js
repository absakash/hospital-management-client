import React from 'react';
import icons from '../../assets/icons/quote.svg'
import peopel1 from '../../assets/images/people1.png'
import peopel2 from '../../assets/images/people2.png'
import peopel3 from '../../assets/images/people3.png'
import Testimonial from './Testimonial';


const Testimonials = () => {

    const reviews=[
        {
            id:1,
            img: peopel1,
            name:'Winson Henry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'Calefornia',
        
        },
        {
            id:2,
            img: peopel2,
            name:"Simon Decok",
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'ladhak'
        },
        {
            id:3,
            img: peopel3,
            name:"Hillary Mekeo",
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'ladhak'
        },
    ]
    return (


        <section className='py-16'>

            <div className='flex justify-between'>
                <div >
                    <h2 className='text-xl text-primary font-bold'>Testimonials</h2>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48 md:w-32' src={icons} alt="" />
                </figure>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        reviews.map(reveiw=><Testimonial
                        key={reveiw.id}
                        reveiw={reveiw}

                        
                        ></Testimonial>)
                    }
            </div>
            
        </section>
    );
};

export default Testimonials;