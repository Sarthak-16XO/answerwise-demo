import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import db from '../../firebase';
import Navbar from "../../components/NavbarAdmin";

const AdminReligionChanges = () => {
    const [filteredReligion, setFilteredReligion] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [religionList, setReligionList] = useState([]); // State to store caste values
    const [addReligion, setAddReligion] = useState("");
    const [addReligionDisplay, setAddReligionDisplay] = useState(false);
    const [deleteReligion, setDeleteReligion] = useState(false);
    const [deleteReligionDisplay, setDeleteReligionDisplay] = useState(false);

    const handleCloseClick = (e) => {
        e.preventDefault();
        setAddReligionDisplay(false);
        setDeleteReligionDisplay(false);
    };

    const setReligionDisplay = () => {
        setAddReligionDisplay(true);
      }
    
      const setReligionDelDisplay = () => {
        setDeleteReligionDisplay(true);
      }

    const handleAddReligion = async () => {
        try {
            const religionDataRef = doc(db, 'religion', 'religionData');

            // Get the existing caste list from Firestore
            const religionDataSnap = await getDoc(religionDataRef);

            if (religionDataSnap.exists()) {
                const currentReligion = religionDataSnap.data().religionData || [];
                const updatedReligion = [...currentReligion, addReligion]; // Use the value from the state

                // Update the caste list in Firestore
                await updateDoc(religionDataRef, { religionData: updatedReligion });

                // Update local state
                setReligionList(updatedReligion);
                setFilteredReligion(updatedReligion);
            } else {
                console.log('The "castesData" document does not exist.');
            }
        } catch (error) {
            console.error('Error adding caste: ', error);
        }
        setAddReligionDisplay(false);
    };
    const handleDeleteReligion = async () => {
        try {
            const religionDataRef = doc(db, 'religion', 'religionData');
            // Get the existing caste list from Firestore
            const religionDataSnap = await getDoc(religionDataRef);

            if (religionDataSnap.exists()) {
                const currentReligion = religionDataSnap.data().religionData || [];
                const updatedReligion = currentReligion.filter(religion => religion !== deleteReligion);

                // Update the caste list in Firestore
                await updateDoc(religionDataRef, { religionData: updatedReligion });

                // Update local state
                setReligionList(updatedReligion);
                setFilteredReligion(updatedReligion);
                console.log('The "cityData" document does  exist.');
            } else {
                console.log('The "cityData" document does not exist.');
            }
        } catch (error) {
            console.error('Error deleting city: ', error);
        }
        setDeleteReligionDisplay(false);
    };
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
                    <div className="mt-4">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={() => setReligionDisplay()}>
                        Add Religion
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setReligionDelDisplay()}>
                        Delete Religion
                    </button>
                </div>
                </div>

               
            </div>

            <ul className='grid grid-flow-row grid-cols-7 gap-x-1 gap-y-1'>
            {filteredReligion.map((religion, index) => (
                <div className='border text-center  bg-red-400  p-2 w-[6.5rem] rounded-lg m-4' key={index}>
                  <Link to={`/${religion}`} className='text-white'>{religion}</Link>
                </div>
              ))}
            </ul>

            {addReligionDisplay && (
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
                                Add a Religion
                            </label>
                            <input class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="username" type="text" placeholder="" onChange={(event) => { setAddReligion(event.target.value) }} required />
                            <button type='submit' className='w-full mt-4 text-lg p-3 bg-red-300 rounded-lg' onClick={() => handleAddReligion()}>Add a Religion</button>
                        </div>
                    </div>
                </div>
            )}

            {deleteReligionDisplay && (
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
                                Delete a Religion
                            </label>
                            <input class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="username" type="text" placeholder="" onChange={(event) => { setDeleteReligion(event.target.value) }} required />
                            <button type='submit' className='w-full mt-4 text-lg p-3 bg-red-300 rounded-lg' onClick={() => handleDeleteReligion()}>Delete a Religion</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AdminReligionChanges