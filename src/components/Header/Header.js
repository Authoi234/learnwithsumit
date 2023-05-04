import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='black'>
            <div className='div-width'>
                <img className='w-full' src="https://learnwithsumit.com/_next/static/media/lws-logo-dark.8e393acf.svg" alt="" />
            </div>
            <div className='ul-div'>
                <ul>
                    <li className='text-5xl'>হোম</li>
                    <li>কোর্সের বিস্তারিত</li>
                    <li>সাকসেস স্টোরি</li>
                    <li>স্টুডেন্ট ফিডব্যাক</li>
                </ul>
                <button>
                    লগইন
                </button>
            </div>
            
        </div>
    );
};

export default Header;