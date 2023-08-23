import React, { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import db from "../firebase";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Grooms = () => {
    const [adsList, setAdsList] = useState([]);
    const adsCollectionRef = collection(db, "ads");

    useEffect(() => {
        const getAds = async () => {
            const data = await getDocs(adsCollectionRef);
            setAdsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getAds();
    }, []);

    return (
        <>
            <Navbar />
            <div className='h-max w-full bg-slate-50 items-center m-10 flex flex-row justify-center'>
                <div className='flex flex-col items-center gap-5 m-5'>
                    <h3 className='font-bold text-3xl text-red-700 underline-offset-2'>Grooms (Boys)</h3>
                    <div className="grid grid-flow-row grid-cols-4 gap-2">
                        {adsList
                            .filter((ads) => ads.gender === "male")
                            .map((ads) => {
                                // Convert Firestore timestamp to a JavaScript Date object
                                const date = ads.date.toDate();
                                // Extract just the date portion
                                const formattedDate = date.toISOString().split('T')[0];

                                return <div className='bg-white shadow-lg p-4 rounded-md w-[20rem] text-slate-900' key={ads.id}>
                                    <span className='text-red-400'>{ads.caste}</span>
                                    <p className='text-slate-950 font-medium'>Name: <span className='text-slate-800 font-normal'>{ads.name}</span></p>
                                    <p className='text-slate-950 font-medium'>Details: <span className='text-slate-800 font-normal'>{ads.details}</span></p>
                                    <p  className='text-slate-950 font-medium'>Contact: <span className='text-slate-800 font-normal'>{ads.phoneNumber}</span></p>
                                    <p  className='text-slate-950 font-medium'>Email: <span className='text-slate-800 font-normal'>{ads.email}</span></p>
                                    <span className='text-sm font-light text-slate-600'>Posted on: {formattedDate}</span> 
                                </div>
                            })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Grooms;
