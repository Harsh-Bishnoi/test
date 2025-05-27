import React from 'react';
import { PRODUCT_DETAILS } from '../utils/helper';

const ProductList = () => {
    return (
        <div className="flex items-center justify-center py-28">
            <div className="max-w-[1140px] px-4 w-full">
                <h2 className='font-mono text-4xl text-center pb-5'>Products</h2>
                <div className="flex gap-4 flex-wrap justify-center">
                    {PRODUCT_DETAILS.map((product, index) => (
                        <div key={index} className="border-black border rounded-2xl max-w-[500px] w-full p-3 md:max-w-[350px]" >
                            <img className='rounded-md w-full' src={product.img} alt={product.name} />
                            <div className="font-mono text-lg font-semibold text-black pt-2"> Name : {product.name} </div>
                            <div className="font-mono text-lg font-medium text-black"> Price : {product.price}  </div>
                            {product.feature.map((Feature, i) => (
                                <p className='font-mono text-lg font-medium' key={i}>Features : {Feature}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;