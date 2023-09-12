import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import db from "../firebase";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CasteIndividual() {
    const { religionname } = useParams();

    const [adsList, setAdsList] = useState([]);
    const adsCollectionRef = collection(db, "ads");
    const [noResultsFound, setNoResultsFound] = useState(false); // Initialize a flag variable

    useEffect(() => {
        const getAds = async () => {
            const data = await getDocs(adsCollectionRef);
            const adsData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            // Check if any matching results are found
            if (adsData.every((ads) => ads.religion !== religionname)) {
                setNoResultsFound(true)
            }
            console.log(religionname);


            console.log(adsData);

            setAdsList(adsData);
        }
        getAds();
    }, []);

    return (
        <>
            <Navbar />
            <div className='h-max w-full bg-slate-50 items-center  m-2 lg:m-10 flex flex-row justify-center'>
                <div className='flex flex-col items-center gap-5 m-5'>
                    <h3 className='font-bold text-3xl text-red-700 underline-offset-2'>{religionname}</h3>
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        {adsList
                            .filter((ads) => ads.religion === religionname)
                            .map((ads) => {
                                // Convert Firestore timestamp to a JavaScript Date object
                                const date = ads.date.toDate();
                                // Extract just the date portion
                                const formattedDate = date.toISOString().split('T')[0];

                                return <div className='bg-white shadow-lg p-4 rounded-md w-[20rem] text-slate-900' key={ads.id}>
                                    <span className='text-red-400'>{ads.caste}</span>
                                    <p className='text-slate-950 font-medium'>Name: <span className='text-slate-800 font-normal'>{ads.name}</span></p>
                                    <p className='text-slate-950 font-medium'>Details: <span className='text-slate-800 font-normal'>{ads.details}</span></p>
                                    <p className='text-slate-950 font-medium'>Contact: <span className='text-slate-800 font-normal'>{ads.phoneNumber}</span></p>
                                    <p className='text-slate-950 font-medium'>Email: <span className='text-slate-800 font-normal'>{ads.email}</span></p>
                                    <span className='text-sm font-light text-slate-600'>Posted on: {formattedDate}</span>
                                </div>
                            })}
                        {noResultsFound && (
                            <div className='text-red-700 md:text-center font-semibold mt-4'>
                                <p>No results found for your match.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <Footer />
        </>

    );
}

export default CasteIndividual;