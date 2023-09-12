import React from 'react';
import { Link } from 'react-router-dom';

const Castes = () => {
    let caste1 = "Agarwal";
    let caste2 = "Brahmin";
    let caste3 = "Jain";
    let caste4 = "Joshi";
    let caste5 = "Sikh";
    let caste6 = "Arora";
    let caste7 = "OBC";
    let caste8 = "Sindhi";
    let caste9 = "Mahajan";
    let caste10 = "Gupta";

    return (
        <div className='hidden md:block'>
            <div className='grid grid-flow-col p-4 gap-x-4 mt-6 '>
                <div className='p-4 bg-white text-red-400 text-lg font-medium rounded-md'>Castes </div>
                <div className='p-4 bg-red-400 text-white rounded-md'><Link to={`/caste/${caste1}`}>Agarwal</Link></div>
                <div className='p-4 bg-red-400 text-white rounded-md'><Link to={`/caste/${caste2}`}>Brahmin</Link></div>
                <div className='p-4 bg-red-400 text-white rounded-md'><Link to={`/caste/${caste3}`}>Jain</Link></div>
                <div className='p-4 bg-red-400 text-white rounded-md'><Link to={`/caste/${caste4}`}>Joshi</Link></div>
                <div className='p-4 bg-red-400 text-white rounded-md'><Link to={`/caste/${caste5}`}>Sikh</Link></div>
                <div className='p-4 bg-red-400 text-white rounded-md'><Link to={`/caste/${caste6}`}>Arora</Link></div>
                <div className='p-4 bg-red-400 text-white rounded-md'><Link to={`/caste/${caste7}`}>OBC</Link></div>
                <div className='p-4 bg-red-400 text-white rounded-md'><Link to={`/caste/${caste8}`}>Sindhi</Link></div>
                <div className='p-4 bg-red-400 text-white rounded-md'><Link to={`/caste/${caste9}`}>Mahajan</Link></div>
                <div className='p-4 bg-red-400 text-white rounded-md'><Link to={`/caste/${caste10}`}>Gupta</Link></div>
                <Link to="/caste" className='p-4 bg-white text-red-400 rounded-md hover:underline'>More</Link>
            </div>
        </div>
    )
}

export default Castes