import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Religion = () => {
    const [religion, setReligion] = useState();
    const [religionList, setReligionList] = useState([]); // State to store caste values

    const inputRef = useRef();

    useEffect(() => {
        const selectElement = inputRef.current;
        const options = selectElement.options;
        const religionValues = [];

        // Extract and store caste values in an array
        for (let i = 1; i < options.length; i++) {
            religionValues.push(options[i].value);
        }

        // Set the caste list in state
        setReligionList(religionValues);
    }, []);

    const handleChange = (event) => {
        setReligion(event.target.value);
    };

    return (
        <>
            <Navbar />
            <div class="mb-4 hidden">
                <label for="religion" class="block cursor-pointer mb-2 text-lg font-medium text-slate-500">Your Caste *</label>
                <select name="religion" id="caste" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={(event) => {
                    setReligion(event.target.value);
                }} required ref={inputRef}>
                    <option value="Religion">Select Religion</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Christian">Christian</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Jain">Jain</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Parsi">Parsi</option>
                    <option value="Jewish">Jewish</option>
                    <option value="No Religion">No Religion</option>
                    <option value="Spiritual">Spiritual</option>
                    <option value="Nepali">Nepali</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div>
                <div className="flex justify-center text-center align-center height: 100vh">
                    <div className='p-10'>
                        <h1 class="max-w-2xl mb-4 text-3xl font-bold  text-red-500">Religions</h1>
                    </div>
                </div>
            </div>

            <ul className='flex flex-row mb-10  justify-center text-center align-center height: 100vh'>
                {religionList.map((item, index) => (
                    <div className='border p-4 text-center w-[6.5rem] bg-slate-50 rounded-lg m-2 border-red-500' key={index}>
                        <Link to={`/religion/${item}`} className='text-slate-900'>{item}</Link>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default Religion;