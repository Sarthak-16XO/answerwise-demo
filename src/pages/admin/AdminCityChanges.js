import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import db from '../../firebase';
import Navbar from "../../components/Navbar";

const AdminCity = () => {
  const [citiesList, setCitiesList] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [addCity, setAddCity] = useState("");
  const [addCityDisplay, setAddCityDisplay] = useState(false);
  const [deleteCity, setDeleteCity] = useState(false);
  const [deleteCityDisplay, setDeleteCityDisplay] = useState(false);
  const [cityList, setCityList] = useState([]); // State to store caste values

  const handleCloseClick = (e) => {
    e.preventDefault();
    setAddCityDisplay(false);
    setDeleteCityDisplay(false);
  };

  const setCityDisplay = () => {
    setAddCityDisplay(true);
}

const setCityDelDisplay = () => {
    setDeleteCityDisplay(true);
}


  const handleAddCities = async () => {
    try {
      const cityDataRef = doc(db, 'cities', 'citiesData');

      // Get the existing caste list from Firestore
      const cityDataSnap = await getDoc(cityDataRef);

      if (cityDataSnap.exists()) {
        const currentCities = cityDataSnap.data().cityList || [];
        const updatedCities = [...currentCities, addCity]; // Use the value from the state

        // Update the caste list in Firestore
        await updateDoc(cityDataRef, { cityList: updatedCities });

        // Update local state
        setCityList(updatedCities);
        setFilteredCities(updatedCities);
        console.log('The city has been successfully added');
      } else {
        console.log('The "castesData" document does not exist.');
      }
    } catch (error) {
      console.error('Error adding caste: ', error);
    }
    setAddCityDisplay(false);
  };

  const handleDeleteCities = async () => {
    try {
      const cityDataRef = doc(db, 'cities', 'citiesData');

      // Get the existing caste list from Firestore
      const cityDataSnap = await getDoc(cityDataRef);

      if (cityDataSnap.exists()) {
        const currentCities = cityDataSnap.data().cityList || [];
        const updatedCities = currentCities.filter(city => city !== deleteCity);

        // Update the caste list in Firestore
        await updateDoc(cityDataRef, { cityList: updatedCities });

        // Update local state
        setCitiesList(updatedCities);
        setFilteredCities(updatedCities);
        console.log('The city has been successfully deleted');
      } else {
        console.log('The "cityData" document does not exist.');
      }
    } catch (error) {
      console.error('Error deleting city: ', error);
    }
    setDeleteCityDisplay(false);
  };

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
    const filtered = citiesList.filter(city => city && city.toLowerCase().includes(searchText.toLowerCase()));
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

          <div className="mt-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={() => setCityDisplay()}>
              Add City
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCityDelDisplay()}>
              Delete City
            </button>
          </div>
        </div>
      </div>
      <ul className='grid grid-flow-row grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-x-1 gap-y-1'>
        {filteredCities.map((city, index) => (
          <div className='border text-center  bg-red-400  p-2 w-[6.5rem] rounded-lg m-4' key={index}>
            <Link to={`/city/${city}`} className='text-white'>{city}</Link>
          </div>
        ))}
      </ul>


      {addCityDisplay && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white flex-col justify-between items-center w-96 p-3 rounded-lg p-15">
            <div className="flex justify-end text-25">
              <div
                className="cursor-pointer text-2xl mr-3"
                onClick={handleCloseClick}
              >
                x
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-slate-500 text-lg font-semibold text-center mb-2" for="username">
                Add a City
              </label>
              <input class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="username" type="text" placeholder="" onChange={(event) => { setAddCity(event.target.value) }} required />
              <button type='submit' className='w-full text-lg p-3 bg-red-300 rounded-lg' onClick={() => handleAddCities()}>Add a City</button>
            </div>
          </div>
        </div>
      )}

      {deleteCityDisplay && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white flex-col justify-between items-center w-96 p-3 rounded-lg p-15">
            <div className="flex justify-end text-25">
              <div
                className="cursor-pointer text-2xl mr-3"
                onClick={handleCloseClick}
              >
                x
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-slate-500 text-lg font-semibold mb-2" for="username">
                Delete a City
              </label>
              <input class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="username" type="text" placeholder="" onChange={(event) => { setDeleteCity(event.target.value) }} required />
              <button type='submit' className='w-full text-lg p-3 bg-red-300 rounded-lg' onClick={() => handleDeleteCities()}>Delete a City</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminCity;
