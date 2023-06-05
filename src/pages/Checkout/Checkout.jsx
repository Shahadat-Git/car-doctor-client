import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Checkout = () => {
    const { _id, title, price, img } = useLoaderData();
    const { user, email } = useContext(AuthContext);

    const handleBookService = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;

        const order = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price,
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('successfully order added')
                }
            })





    }
    return (
        <div>
            <h2 className='text-center text-4xl'>Book Service : {title}</h2>

            <div className='bg-base-300 p-20 rounded-lg my-10'>
                <form onSubmit={handleBookService}>

                    <div className='grid  grid-cols-1 md:grid-cols-2 gap-4'>
                        <input name='name' defaultValue={user?.displayName} className='input input-bordered w-full' type="text" placeholder=' Name' />
                        <input name='date' className='input input-bordered w-full' type="date" />
                        <input name='email' defaultValue={user?.email} className='input input-bordered w-full' type="email" placeholder=' Your Email' />
                        <input name='price' defaultValue={'$' + price} className='input input-bordered w-full' type="text" placeholder='Due Amount' />
                    </div>
                    {/* <textarea className=' rounded-lg input-bordered w-full my-4' name="" id="" cols="30" rows="10"></textarea> */}
                    <input className='text-white btn btn-block btn-ghost bg-main hover:bg-main mt-4' type="submit" value="Order Confirm" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;