import React from 'react';
import './Section2.css';
import InfoBox from '../InfoBox/InfoBox';

const Section2 = () => {
    const courseInfos = [
        {
            id: 1,
            name: '12 টি মডিউলে 135+ ভিডিও',
            para: 'আপনারা যেন ধাপে ধাপে শিখতে পারেন সেজন্য পুরো কোর্সটি 12টি মডিউলে ও 135+ ভিডিওতে ভাগ করে সাজানো হয়েছে।',
            icon: 'video'
        },
        {
            id: 2,
            name: '30 ঘণ্টার 15GB রেকোর্ডেড কন্টেন্ট',
            para: 'সময় এবং ব্যান্ডউইডথ খরচ এর বিষয়টি বিবেচনা করে ভিডিও সাইজ এবং ডিউরেশন অপটিমাইজ করা হয়েছে।',
            icon: 'arrow-down-on-squ'
        },
        {
            id: 3,
            name: '120+ টি কুইজ',
            para: 'আপনারা যেন শেখার সাথে সাথে নিজেদের প্রোগ্রেস যাচাই করতে পারেন সেজন্য প্রতিটি ভিডিও শেষে ব্যাখ্যা ও উত্তর সহ কুইজ থাকবে।',
            icon: 'clipboard-document'
        },
        {
            id: 4,
            name: '10 টি এসাইনমেন্ট',
            para: 'প্রতিটি মডিউল শেষেই থাকবে বড় এসাইনমেন্ট যেগুলো আপনারা নিজে করবেন। প্রতিটি এসাইনমেন্ট এর সল্যুশন লাইভ সেশনে দেয়া হবে।',
            icon: 'codeBracket'
        },
        {
            id: 5,
            name: '৫ টি লাইভ সেশন',
            para: 'সাপ্তাহিক লাইভ সেশনের ব্যবস্থা থাকছে যেখানে আমরা গুরুত্ত্বপূর্ণ টপিক নিয়ে আলোচনার পাশাপাশি আপনাদের প্রশ্নের উত্তর দিব।',
            icon: 'userGroup'
        },
        {
            id: 6,
            name: '10 টি প্রজেক্ট',
            para: 'পুরো কোর্সটিতে আমরা প্রজেক্ট ভিত্তিক লার্নিং প্রসেস ফলো করেছি। কোর্সে আমরা মিলেমিশে 10 টি প্রজেক্ট করবো।',
            icon: 'inbox'
        }
    ]
    return (
        <div id='sect2'>
            <div className='bg-div'>
                <div>
                    <div data-aos="fade-up">
                        <img width={'12%'} src="https://learnwithsumit.com/_next/static/media/peep1.f4841716.svg" alt="" />
                    </div>
                    <h2>এক নজরে আমাদের <span className='blue'>রিডাক্স</span> কোর্স</h2>
                    <h4>এই কোর্সে যা যা থাকছে</h4>
                </div>
                <div className='d-flex'>
                    {
                        courseInfos.map(courseInfo => <InfoBox courseInfo={courseInfo} key={courseInfo.id} ></InfoBox>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Section2;