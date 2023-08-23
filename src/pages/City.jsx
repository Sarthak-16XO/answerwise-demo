import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import db from '../firebase';
import Navbar from '../components/Navbar';

const City = () => {
  const [citiesList, setCitiesList] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const getCities = async () => {
      // Get the 'citiesData' document
      const citiesDataRef = doc(db, 'cities', 'citiesData');

      try {
        const citiesDataSnap = await getDoc(citiesDataRef);
        if (citiesDataSnap.exists()) {
          const cityOptions = citiesDataSnap.data().cityList || [];
          const filteredCities = cityOptions
            .filter(city => city)
            .sort((a, b) => a.localeCompare(b)); // Sort cities alphabetically

          setCitiesList(filteredCities);
          setFilteredCities(filteredCities);
          console.log(filteredCities);
        } else {
          console.log('The "citiesData" document does not exist.');
        }
      } catch (error) {
        console.error('Error fetching city data: ', error);
      }
    };

    getCities();
  }, []);

  useEffect(() => {
    // Filter the cities based on the search text
    const filtered = citiesList.filter(city => city.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredCities(filtered);
  }, [searchText, citiesList]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center text-center align-center height: 100vh">
        <div className='p-10'>
          <h1 className="max-w-2xl mb-4 text-3xl font-bold text-red-500">Cities</h1>
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
      <ul className='grid grid-flow-row grid-cols-7 gap-x-1 gap-y-1'>
        {filteredCities.map((city, index) => (
          <div className='border text-center p-2 w-[6.5rem] bg-slate-50 rounded-lg m-4 border-red-500' key={index}>
            <Link to={`/city/${city}`} className='text-slate-900'>{city}</Link>
          </div>
        ))}
      </ul>
    </>
  );
}

export default City;
