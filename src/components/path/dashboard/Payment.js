import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51NwWQZSCnn5WgZWJZcqc85bjEbAWY6f7PQ1rr0wlZT0WKuLo8H3xXTciDEqftPj67viUlBGfM5h59zfgahnV0qMR00AFTWQDOc');
const Payment = () => {
    const pay=useLoaderData()

    console.log("pay ", pay)
    return (
        <div>
            <h1 className="text-3xl">payment for booking {pay.tname}</h1>
            <p>please pay <strong>${pay.price} now</strong></p>

            <div className='w-96 my-6'>
            <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
            </div>
        </div>
    );
};

export default Payment;