import React, { useState, useEffect, useRef } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore';
import db from "../firebase";
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [caste, setCaste] = useState();
    const [gender, setGender] = useState();
    const [religion, setReligion] = useState();
    const [details, setDetails] = useState();
    const [city, setCity] = useState();
    const [text, setText] = useState('');
    const [nriChecked, setNriChecked] = useState(false);
    const [cityArray, setCityArray] = useState();
    const [widowChecked, setWidowChecked] = useState(false);
    const [manglikChecked, setManglikChecked] = useState(false);
    const [pcChecked, setPcChecked] = useState(false);
    const [divorceeChecked, setDivorceeChecked] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const maxCharacters = 260;
    // const [cityOptions, setCityOptions] = useState([]);
    // const [casteOptions, setCasteOptions] = useState([]);


    // Loading from DB
    const [citiesList, setCitiesList] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredCastes, setFilteredCastes] = useState([]);
    const [casteList, setCasteList] = useState([]); // State to store caste values

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
                } else {
                    console.log('The "citiesData" document does not exist.');
                }
            } catch (error) {
                console.error('Error fetching city data: ', error);
            }
        };

        getCities();
    }, []);

    const inputRef = useRef();
    const inputsRef = useRef();
    // const castesValues = [];

    // useEffect(() => {

    //     const selectElement = inputsRef.current;
    //     const options = selectElement.options;

    //     // Extract and store caste values in an array
    //     for (let i = 1; i < options.length; i++) {
    //         const selectedOption = options[i];
    //         selectedOption.value = selectedOption.textContent;
    //         castesValues.push(selectedOption.value);
    //     }

    //     console.log(castesValues)
    //     setCasteOptions(castesValues);

    //     console.log(casteOptions)
    // }, []);

    // useEffect(() => {
    //     // Define a function to add all city options to a single document

    //       const citiesCollectionRef = doc(db, 'castes', 'castesData'); // Specify the document ID as 'citiesData'

    //       try {
    //         // Set the data for the 'citiesData' document with the city options as an array
    //         setDoc(citiesCollectionRef, { casteList: castesValues });
    //         console.log('City options added to the database');
    //       } catch (error) {
    //         console.error('Error adding city options: ', error);
    //       }


    // }, []); // Add an empty dependency array to run the effect only once

    const adsCollectionRef = collection(db, "ads");
    let navigate = useNavigate();
    const createAds = async () => {
        // Get the current date and time
        const currentDate = new Date();

        await addDoc(adsCollectionRef, {
            name, phoneNumber, email, caste, gender, religion, details, city, date: currentDate, nri: nriChecked,
            widow: widowChecked,
            manglik: manglikChecked,
            pc: pcChecked,
            divorcee: divorceeChecked,
        });

        // Show the success message and reset form fields (if needed)
        setShowSuccessMessage(true);
        navigate('/');
    }

    const handleDetailsChange = (event) => {
        setDetails(event.target.value);
    };

    const handleCombinedChange = (event) => {
        handleDetailsChange(event);
        handleTextChange(event);
    };

    const handleTextChange = (event) => {
        const newText = event.target.value;
        if (newText.length <= maxCharacters) {
            setText(newText);
        }
    };

    return (
        <div className='content h-max w-full'>
            <h1 className='text-center mt-6 text-slate-900 font-bold text-2xl'>Post your Matrimonial Ads for Free !</h1>
            <div class="flex flex-col mt-10 items-center ">
                <div className='bg-slate-50 mt-6 p-5 border-2 border-red-400 rounded-md'>
                    <span className='text-red-500'>Sample :-</span>
                    <p>Smart boy, Age 29, Height 5'-6", Graduate and Diploma <br />
                        in Mechanical Engg, Working in Pioneer Toyota as Techanician, <br />
                        Salary 15000, Family settled in Chandigarh, Father-Job, <br />
                        Mother-Housewife, 1 Brother and 2 Sisters(Married), <br />
                        Prefferable in near Chandigarh</p>
                </div>
                <div class="w-full max-w-lg h-fit">
                    <div class="rounded px-8 pt-6 pb-8 mb-4" >
                        <div class="mb-4">
                            <label class="block text-slate-500 text-lg font-semibold mb-2" for="username">
                                Your Name
                            </label>
                            <input class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="username" type="text" placeholder="Your Name"
                                onChange={(event) => { setName(event.target.value) }} required />
                        </div>
                        <div class="mb-4">
                            <label class="block text-slate-500 text-lg font-semibold mb-2" for="username">
                                Your Mobile Number
                            </label>
                            <input class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="username" type="text" placeholder="" onChange={(event) => { setPhoneNumber(event.target.value) }} required />
                        </div>
                        <div class="mb-4">
                            <label class="block text-slate-500 text-lg font-semibold mb-2" for="username">
                                Your Details
                            </label>
                            <textarea
                                id="textarea"
                                class={`bg-gray-50 border ${text.length > maxCharacters ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                                value={text}
                                onChange={handleCombinedChange}
                                required
                            />

                        </div>
                        <div class="mb-4">
                            <label class="block text-slate-500 text-lg font-semibold mb-2" for="username">
                                Your Email ID
                            </label>
                            <input class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " id="username" type="text" placeholder="Your Name" onChange={(event) => { setEmail(event.target.value) }} required />
                        </div>
                        <div class="mb-4">
                            <label for="countries" class="block mb-2 text-slate-500 text-lg font-medium ">Your Gender *</label>
                            <select id="gender" class="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                                onChange={(event) => {
                                    setGender(event.target.value);
                                }}
                                required
                            >
                                <option selected>Select Gender</option>
                                <option value="male">Male (Groom)</option>
                                <option value="female">Female (Bride)</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label for="religion" class="block text-lg mb-2 font-medium text-slate-500 ">Your Religion *</label>
                            <select name="religion" id="religion" class="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={(event) => {
                                setReligion(event.target.value);
                            }} required>
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
                        <div class="mb-4">
                            <label for="caste" class="block cursor-pointer mb-2 text-lg font-medium text-slate-500">Your Caste *</label>
                            <select name="caste" id="caste" class="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={(event) => {
                                setCaste(event.target.value);
                            }} required>
                                <option selected value="Caste">Select Caste</option>
                                {filteredCastes.map((city, index) => (
                                    <option value={city} >{city}</option>
                                ))}

                            </select>
                        </div>
                        <div>
                            <label for="city" class="block cursor-pointer mb-2 text-lg font-medium text-slate-500 ">Your City *</label>
                            <select name="city" id="city" class="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={(event) => {
                                setCity(event.target.value);
                            }} required>
                                <option value="0">Select Your City</option>
                                {filteredCities.map((city, index) => (
                                    <option value={city} >{city}</option>
                                ))}
                            </select>
                        </div>
                        <p className='tex-lg text-slate-500 mt-6 font-medium'>Optional</p>
                        <div className='grid mt-5 grid-flow-row grid-cols-2 gap-4'>
                            <div class="flex items-center bg-slate-200 p-4 border-2 border-red-400 rounded-md mb-4 ">
                                <input id="nri" type="checkbox" value={nriChecked}
                                    onChange={() => setNriChecked(!nriChecked)} class="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">NRI</label>
                            </div>
                            <div class="flex items-center bg-slate-200 p-4 border-2 border-red-400 rounded-md mb-4">
                                <input id="widow" type="checkbox" value={widowChecked}
                                    onChange={() => setWidowChecked(!widowChecked)} class="w-4 h-4 text-blue-600 bg-gray-100 cursor-pointer border-gray-300 rounded focus:ring-blue-500 " />
                                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">Widow / Widower</label>
                            </div>
                            <div class="flex items-center bg-slate-200 p-4 border-2 border-red-400 rounded-md mb-4">
                                <input id="manglik" type="checkbox" value={manglikChecked}
                                    onChange={() => setManglikChecked(!manglikChecked)} class="w-4 h-4 text-blue-600 bg-gray-100 cursor-pointer border-gray-300 rounded focus:ring-blue-500 " />
                                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">Manglik</label>
                            </div>
                            <div class="flex items-center bg-slate-200 p-4 border-2 border-red-400 rounded-md mb-4">
                                <input id="pc" type="checkbox" value={pcChecked}
                                    onChange={() => setPcChecked(!pcChecked)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer rounded focus:ring-blue-500 " />
                                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">Physcially Challenged</label>
                            </div>
                            <div class="flex items-center bg-slate-200 p-4 border-2 border-red-400 rounded-md mb-4">
                                <input id="divorcee" type="checkbox" value={divorceeChecked}
                                    onChange={() => setDivorceeChecked(!divorceeChecked)} class="w-4 h-4 text-blue-600 bg-gray-100 cursor-pointer border-gray-300 rounded focus:ring-blue-500 " />
                                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">Divorcee</label>
                            </div>
                        </div>
                        <div class="flex items-center mt-4 rounded-md mb-4">
                            <input id="terms" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded cursor-pointer focus:ring-blue-500 " required />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">I agree to terms and conditions</label>
                        </div>
                        <button type="submit" class="text-white bg-red-400 hover:bg-red-700  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={createAds}>Submit</button>
                    </div>

                </div>
            </div>

            {showSuccessMessage && (
                <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                    <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
                </div>
            )}


        </div>
    )
}

export default Form;