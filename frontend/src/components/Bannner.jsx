import React from 'react'
import logoImg from '../assets/image/logo.png'
import avatarImg from '../assets/image/avatar.png'
import avatarBgImg from '../assets/image/avatar-bg.png'

const Bannner = () => {
    return (
        <div className='bg-white relative overflow-hidden h-full ' >
            <div className="logo px-10 pt-8  flex gap-2 items-center">
                <img className='w-[3rem] h-[2.2rem] top-2' src={logoImg} alt="" />
                <span className='text-[2rem] font-semibold'>Blackcoffer</span>
            </div>
            <div className='w-full flex items-center justify-center relative h-full'>
                <img className='aw-[3rem] h-auto  max-w-[28rem] pb-2 z-20' src={avatarImg} alt="" />
                <img className='absolute bottom-[-7rem] w-full ' src={avatarBgImg} alt="" />


            </div>

        </div>
    )
}

export default Bannner
