import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
            <div className='flex justify-between flex-wrap gap-4'>
                <p className='text-white text-center w-full sm:w-auto font-light'>© {year} Riyaz. All rights reserved.</p>
                <div className='text-white flex justify-around sm:w-[250px] w-full'>
                    <a href="mailto:mohammedriyaz8135@gmail.com" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
                        <FiMail className='text-xl' />
                    </a>
                    <a href="https://www.instagram.com/md_riyaz_188/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
                        <AiFillInstagram className='text-xl' />
                    </a>
                    <a href="https://www.linkedin.com/in/md-riyaz-99a892293/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
                        <AiFillLinkedin className='text-xl' />
                    </a>
                    <a href="https://github.com/RIYAZ18843" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
                        <FaGithub className='text-xl' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
