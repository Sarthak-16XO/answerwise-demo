import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from '../../firebase';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AdminCaste = () => {
    const [filteredCastes, setFilteredCastes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [addCaste, setAddCaste] = useState("");
    const [addCasteDisplay, setAddCasteDisplay] = useState(false);
    const [deleteCaste, setDeleteCaste] = useState(false);
    const [deleteCasteDisplay, setDeleteCasteDisplay] = useState(false);
    const [casteList, setCasteList] = useState([]); // State to store caste values

    const handleCloseClick = (e) => {
        e.preventDefault();
        setAddCasteDisplay(false);
        setDeleteCasteDisplay(false);
    };

    useEffect(() => {
        const getCities = async () => {
            // Get the 'citiesData' document
            const casteDataRef = doc(db, 'castes', 'castesData');

            try {
                const citiesDataSnap = await getDoc(casteDataRef);
                if (citiesDataSnap.exists()) {
                    const casteOptions = citiesDataSnap.data().casteList || [];
                    const filteredCastes = casteOptions
                        .filter(city => city)
                        .sort((a, b) => a.localeCompare(b)); // Sort cities alphabetically

                    setCasteList(filteredCastes);
                    setFilteredCastes(filteredCastes);
                    console.log(filteredCastes);
                } else {
                    console.log('The "citiesData" document does not exist.');
                }
            } catch (error) {
                console.error('Error fetching city data: ', error);
            }
        };

        getCities();
    }, []);

    const setCasteDisplay = () => {
        setAddCasteDisplay(true);
    }

    const setCasteDelDisplay = () => {
        setDeleteCasteDisplay(true);
    }


    const handleAddCaste = async () => {
        try {
            const casteDataRef = doc(db, 'castes', 'castesData');
    
            // Get the existing caste list from Firestore
            const casteDataSnap = await getDoc(casteDataRef);
    
            if (casteDataSnap.exists()) {
                const currentCastes = casteDataSnap.data().casteList || [];
                const updatedCastes = [...currentCastes, addCaste]; // Use the value from the state
    
                // Update the caste list in Firestore
                await updateDoc(casteDataRef, { casteList: updatedCastes });
    
                // Update local state
                setCasteList(updatedCastes);
                setFilteredCastes(updatedCastes);
            } else {
                console.log('The "castesData" document does not exist.');
            }
        } catch (error) {
            console.error('Error adding caste: ', error);
        }
        setAddCasteDisplay(false);
    };
    const handleDeleteCaste = async () => {
        try {
            const casteDataRef = doc(db, 'castes', 'castesData');
    
            // Get the existing caste list from Firestore
            const casteDataSnap = await getDoc(casteDataRef);
    
            if (casteDataSnap.exists()) {
                const currentCastes = casteDataSnap.data().casteList || [];
                const updatedCastes = currentCastes.filter(caste => caste !== deleteCaste);
    
                // Update the caste list in Firestore
                await updateDoc(casteDataRef, { casteList: updatedCastes });
    
                // Update local state
                setCasteList(updatedCastes);
                setFilteredCastes(updatedCastes);
            } else {
                console.log('The "castesData" document does not exist.');
            }
        } catch (error) {
            console.error('Error deleting caste: ', error);
        }
    };
    


    useEffect(() => {
        // Filter the cities based on the search text
        const filtered = casteList.filter(caste => caste && caste.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredCastes(filtered);
        
    }, [searchText, casteList]);

    return (
        <>
            <Navbar />
            <div className="flex justify-center text-center align-center height: 100vh">
                <div className='p-10'>
                    <h1 className="max-w-2xl mb-4 text-3xl font-bold text-red-500">Castes</h1>
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
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={() => setCasteDisplay()}>
                            Add Caste
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCasteDelDisplay()}>
                            Delete Caste
                        </button>
                    </div>
                </div>
            </div>

            <ul className='grid grid-flow-row  grid-cols-7  gap-x-1 gap-y-1'>
                {filteredCastes.map((item, index) => (
                    <div className='border text-center w-[6.5rem] p-2 bg-red-400 rounded-lg m-4' key={index}>
                        <Link to={`/caste/${item}`} className='text-white'>{item}</Link>
                    </div>
                ))}
            </ul>

            {addCasteDisplay && (
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
                                Add a Caste
                            </label>
                            <input class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="username" type="text" placeholder="" onChange={(event) => { setAddCaste(event.target.value) }} required />
                            <button type='submit' className='w-full bg-red-300 rounded-lg' onClick={() => handleAddCaste()}>Add a Caste</button>
                        </div>
                    </div>
                </div>
            )}

            {deleteCasteDisplay && (
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
                                Delete a Caste
                            </label>
                            <input class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="username" type="text" placeholder="" onChange={(event) => { setDeleteCaste(event.target.value) }} required />
                            <button type='submit' className='w-full text-lg p-3 bg-red-300 rounded-lg' onClick={() => handleDeleteCaste()}>Delete a Caste</button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />

        </>
    )
}

export default AdminCaste;