    import React from 'react'
    import Button from '../../shared/Button'
    import Image from 'next/image'
    const HomePage = () => {
    return (
        <div className=' h-screen bg-[#C7F7FF] flex'>
        <div className='w-1/2 flex flex-col  p-10 gap-3'>
            <div className=" text-3xl md:text-5xl font-bold pb-2 flex flex-col gap-3 text-gray-700 ">
                <h1 className='text-[#74A92D]'>BRIDGING</h1>
                <h1 className='text-[#2380B8]'>DREAMS &</h1>
                <h1 className='text-[#2380B8]'>RREALITY.</h1>
            </div>
            <div className="text-2xl text-[#63AED4] ">
                <h2>Somato cognitive</h2>
                <h2>Coordination therapy.</h2>
            </div>
            <div>
            <button className="btn btn-outline btn-sm rounded-full  text-[#2380B8] ">Learn more...</button>
            </div>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-10 flex justify-center md:justify-end mt-9">
            <Image src="" alt="varimg" width={700} height={300} />
            </div>
        </div>
        

    )
    }

    export default HomePage