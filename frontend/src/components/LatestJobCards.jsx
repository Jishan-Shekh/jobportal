import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { formatSalary } from '@/lib/utils'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='break-words font-medium text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='my-2 break-words font-bold text-lg'>{job?.title}</h1>
                <p className='break-words text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='mt-4 flex flex-wrap items-center gap-2'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'whitespace-normal break-words text-[#7209b7] font-bold'} variant="ghost">{formatSalary(job?.salary)}</Badge>
            </div>

        </div>
    )
}

export default LatestJobCards