import React from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets'
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Home - GadgetHeaven</title>
            </Helmet>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;