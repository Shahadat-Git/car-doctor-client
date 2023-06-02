import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-xl text-main font-semibold'>Service</h3>
                <h2 className='font-semibold text-3xl my-5'>Our Service Area</h2>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-3 gap-5 my-10'>
                {
                    data?.map(item => <ServiceCard
                        key={item._id}
                        service={item}
                    ></ServiceCard>)
                }
            </div>

            <div className='flex justify-center mb-10'>
                <button className='btn bg-main text-white hover:bg-[#e2592faf]'>More Services</button>
            </div>
        </div>
    );
};

export default Service;