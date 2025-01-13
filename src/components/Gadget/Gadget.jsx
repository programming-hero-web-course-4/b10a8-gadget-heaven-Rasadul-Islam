import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const {product_image, product_title, price, product_id}= gadget;
    return (

        <div className="card bg-base-100 border w-96 rounded-2xl overflow-hidden mx-auto">
            <figure className="px-5 pt-5 w-full h-72 mx-auto">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-2xl w-full h-full object-contain object-center border-2 " />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title">{product_title}</h2>
                <p className=''>Price: {price}$</p>
                <div className="card-actions">
                    <Link to={`/gadget/${product_id}`}>
                        <button className="btn bg-transparent text-purple-500 border-2 border-purple-500 rounded-full px-10 font-bold mt-2">View Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Gadget;