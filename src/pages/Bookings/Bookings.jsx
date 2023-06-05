import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();


    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('doctor-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {

                    setBookings(data)
                }
                else {
                    // logout and navigate
                    navigate('/');
                }
            })
    }, [url, navigate])


    const handleDelete = (id) => {
        const procced = confirm('are you want to delete?')
        if (procced) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('successfully delete')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining);
                    }
                })
        }
    }


    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' }),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id)

                    const current = bookings.find(booking => booking._id === id)

                    current["status"] = 'confirm'

                    const updatedBookings = [current, ...remaining]
                    setBookings(updatedBookings)

                }

            })
    }


    return (
        <div>
            <h3 className='text-5xl'>Your Bookings : {bookings.length}</h3>

            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>service</th>
                                <th>date</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleBookingConfirm={handleBookingConfirm}
                                ></BookingRow>)
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
};

export default Bookings;