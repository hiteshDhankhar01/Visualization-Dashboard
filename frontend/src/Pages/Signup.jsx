import React from 'react'
import Bannner from '../components/Bannner'
import Login from '../components/Login'

const Signup = () => {
    return (
        <div className='h-screen  flex flex-col md:flex-row'>
    <div className='w-full md:w-full amd:w-[70%] border-r-2 '>
        <Bannner />
    </div>

    <div className='w-full md:max-w-[25rem] amd:w-[30%]'>
        <Login />
    </div>
</div>

    )
}

export default Signup
