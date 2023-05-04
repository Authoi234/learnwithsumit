import React from 'react';
import './Section3.css';
import mainImg from '../modiulImg.png'

const Section3 = () => {
    return (
        <div id='sect3'>
            <div className='text-center'>
                <div data-aos="fade-up">
                    <img width={'8%'} src="https://learnwithsumit.com/_next/static/media/peep2.ee5f8180.svg" alt="" />
                </div>
                <h2>কোর্সে যে যে <span className='blue'>মডিউল</span> থাকছে</h2>
                <h4>12 টি মডিউলে সাজানো হয়েছে পুরো কোর্সটি</h4>
            </div>
            <div className='flexAndStyle'>
                <div>
                    <img className='main-img' width='75%' src={mainImg} alt="" />
                </div>
                <div className='btn-div'>
                    <button className="btn-num">1</button> <h3> প্রথম সপ্তাহ</h3> <br /> <div style={{paddingLeft: '40px'}}> <p>আমরা দুইটি মডিউল শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।</p> <br /> <button style={{color: 'blue', border: '2px solid blue', backgroundColor: 'white', padding: '5px 10px'}}>রিডাক্স ফান্ডামেন্টালস</button><button style={{color: 'blue', border: '2px solid blue', backgroundColor: 'white', padding: '5px 10px'}}>ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স</button> <br /> <p>4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট</p> </div> <br />
                    <button className="btn-num">2</button> <h3> দ্বিতীয় সপ্তাহ</h3> <br /> <div style={{paddingLeft: '40px'}}> <p>আমরা দুইটি মডিউল শেষ করবো এবং রিয়্যাক্ট-রিডাক্স ব্যবহার করে দুটি প্রজেক্ট করবো।</p> <br /> <button style={{color: 'blue', border: '2px solid blue', backgroundColor: 'white', padding: '5px 10px'}}>প্রজেক্ট - সিম্পল টুডু এপ্লিকেশন</button><button style={{color: 'blue', border: '2px solid blue', backgroundColor: 'white', padding: '5px 10px'}}>প্রজেক্ট - এডভান্সড টুডু এপ্লিকেশন</button> <br /> <p>3+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট</p> </div> <br />
                    <button className="btn-num">3</button>  <h3> তৃতীয় সপ্তাহ</h3> <br /> <div style={{paddingLeft: '40px'}}> <p>আমরা দুইটি মডিউল শেষ করবো এবং রিডাক্স টুলকিট নিয়ে বিস্তারিত জানবো ও একটি প্রজেক্ট করবো।</p> <br /> <button style={{color: 'blue', border: '2px solid blue', backgroundColor: 'white', padding: '5px 10px'}}>ইন্ট্রোডাকশন টু রিডাক্স টুলকিট</button><button style={{color: 'blue', border: '2px solid blue', backgroundColor: 'white', padding: '5px 10px'}}>প্রজেক্ট - ভিডিও ওয়েবসাইট উইথ রিডাক্স টুলকিট</button> <br /> <p>প্রায় 5 ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট</p> </div> <br />
                    <button className="btn-num">4</button> <h3> চতূর্থ সপ্তাহ</h3> <br /> <div style={{paddingLeft: '40px'}}> <p>আমরা দুইটি মডিউল শেষ করবো এবং রিডাক্স টুলকিট দিয়ে আরেকটি প্রজেক্ট করবো। সেই সাথে আর.টি.কে কুয়ারি নিয়ে প্রাথমিক ধারণা নিয়ে প্রজেক্টটি আপডেট করবো।</p> <br /> <button style={{color: 'blue', border: '2px solid blue', backgroundColor: 'white', padding: '5px 10px'}}>প্রজেক্ট - এক্সপেন্স ট্র্যাকার এপ্লিকেশন</button><button style={{color: 'blue', border: '2px solid blue', backgroundColor: 'white', padding: '5px 10px'}}>ইন্ট্রোডাকশন টু আর.টি.কে কুয়ারি</button> <br /> <p>প্রায় 5 ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট</p> </div> <br />
                    <button className="btn-num">5</button> <h3> পঞ্চম সপ্তাহ</h3> <br /> <div style={{paddingLeft: '40px'}}> <p>আমরা দুইটি মডিউল শেষ করবো এবং আর.টি.কে কুয়ারি দিয়ে আমাদের কোর্সের ফাইনাল প্রজেক্ট হিসেবে এডভান্স চ্যাট এপ্লিকেশন বানাবো।</p> <br /> <button style={{color: 'blue', border: '2px solid blue', backgroundColor: 'white', padding: '5px 10px'}}>প্রজেক্ট - চ্যাট এপ্লিকেশন - পার্ট 1</button><button style={{color: 'blue', border: '2px solid blue', backgroundColor: 'white', padding: '5px 10px'}}>প্রজেক্ট - চ্যাট এপ্লিকেশন - পার্ট 2</button> <br /> <p>প্রায় 6+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট</p> </div> <br />
                    <button className="btn-num">6</button> <h3> ষষ্ঠ সপ্তাহ</h3> <br /> <div style={{paddingLeft: '40px'}}> <p>আমরা দুইটি মডিউল শেষ করবো এবং রিডাক্স ডকুমেন্টেশন, রিসিলেক্ট লাইব্রেরি এবং রিডাক্স স্ট্যান্ডার্ড প্যাটার্ন সম্পর্কে জানবো। সেই সাথে কিছু কমন জব ইন্টারভিউ প্রশ্ন নিয়ে আলোচনা করবো।</p> <br /> <button style={{color: 'blue', border: '2px solid blue', backgroundColor: 'white', padding: '5px 10px'}}>সিলেক্টর, রিসিলেক্ট, মেমোয়াইজড সিলেক্টর এবং রিডাক্স VS কন্টেক্সট এপিআই</button><button style={{color: 'blue', border: '2px solid blue', backgroundColor: 'white', padding: '5px 10px'}}>এক্সপ্লোরিং রিডাক্স ডকুমেন্টেশন</button> <br /> <p>প্রায় ৪ ঘণ্টার ভিডিও ও ফাইনাল পরীক্ষা</p> </div> <br />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Section3;