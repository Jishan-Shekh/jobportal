import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='px-4 text-center'>
            <div className='mx-auto my-8 flex max-w-4xl flex-col gap-5 sm:my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Portal Website</span>
                <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl'>Search, Apply & <br className='hidden sm:block' /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p>Find the best job opportunities that match your skills and experience on our platform. Start your career journey with us today!</p>
                <div className='mx-auto flex w-full max-w-xl items-center gap-2 rounded-full border border-gray-200 bg-white pl-3 shadow-lg sm:gap-4'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full p-2 '
 
                    />
                    <Button onClick={searchJobHandler} className="shrink-0 rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection