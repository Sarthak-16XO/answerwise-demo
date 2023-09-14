import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Religion = () => {
    const [filteredReligion, setFilteredReligion] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [religionList, setReligionList] = useState([]); // State to store caste values

    useEffect(() => {
        const getReligion = async () => {
            // Get the 'citiesData' document
            const religionDataRef = doc(db, 'religion', 'religionData');

            try {
                const religionDataSnap = await getDoc(religionDataRef);
                if (religionDataSnap.exists()) {
                    const religionOptions = religionDataSnap.data().religionData || [];
                    const filteredReligion = religionOptions
                        .filter(city => city)
                        .sort((a, b) => a.localeCompare(b)); // Sort cities alphabetically

                    setReligionList(filteredReligion);
                    setFilteredReligion(filteredReligion);
                    console.log(filteredReligion);
                } else {
                    console.log('The "citiesData" document does not exist.');
                }
            } catch (error) {
                console.error('Error fetching city data: ', error);
            }
        };

        getReligion();
    }, []);

    useEffect(() => {
        // Filter the cities based on the search text
        const filtered = religionList.filter(religion => religion && religion.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredReligion(filtered);
    }, [searchText, religionList]);

    return (
        <>
            <Navbar />
            <div className="flex justify-center text-center align-center height: 100vh">
                <div className='p-10'>
                    <h1 className="max-w-2xl mb-4 text-3xl font-bold text-red-500">Religions</h1>
                    <div className=''>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block mt-10 w-[20rem] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search ..." required value={searchText}
                                onChange={(e) => setSearchText(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>

            <ul className='grid grid-flow-row grid-cols-3 md:grid-cols-5  lg:grid-cols-7  gap-x-1 gap-y-1'>
            {filteredReligion.map((religion, index) => (
              <div className='border text-center  bg-red-400  p-2 w-[6.5rem] rounded-lg m-4' key={index}>
                <Link to={`/religion/${religion}`} className='text-white'>{religion}</Link>
              </div>
            ))}
          </ul>
        </>
    )
}

export default Religion;