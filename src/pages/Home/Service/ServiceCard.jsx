import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="card w-full bg-base-100 border">
            <img className='p-5 w-full rounded-3xl h-[208px]'  src={service.img} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">
                    {service.title}
                </h2>
                <div className="card-actions justify-between">
                    <div className="text-main font-semibold text-md">Price : ${service.price}</div>
                    <div className="text-main font-bold text-2xl">→</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;