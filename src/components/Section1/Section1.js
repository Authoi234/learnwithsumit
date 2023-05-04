import { Link } from 'react-router-dom';
import './Section1.css';

const Section1 = () => {
    return (
        <div className='margin-top' id='sect1'>
            <div>
                <div>
                    <img width={'11%'} src="https://learnwithsumit.com/_next/static/media/redux.9b734afa.svg" alt="" />
                </div>
                <div>
                    <p className='blue-color'>বাংলা রিয়্যাক্ট-রিডাক্স কোর্স</p>
                    <h1>থিংক ইন এ <span className='blue-color'>রিডাক্স</span> ওয়ে</h1>
                    <p className='sml-txt'>রিডাক্স টুলকিট, আর.টি.কে কুয়ারি এবং থাংক</p>
                    <h4>রিডাক্স এর মৌলিক এবং আবশ্যিক বিষয়সমূহ বুঝার পাশাপাশি এই কোর্সের <br /> প্রজেক্ট ভিত্তিক শেখানোর পদ্ধতি আপনাকে একজন দক্ষ রিডাক্স প্রোগ্রামার হয়ে <br /> উঠতে সাহায্য করবে বলে আমাদের বিশ্বাস।</h4>
                    <button className='btn-intro'>
                        <Link to='videos'> কোর্স ইন্ট্রো ভিডিও দেখুন</Link>
                       
                    </button>
                </div>
            </div>
            <div>
                <button className='btn-code'>enroll.jsx</button>
                <button className='btn-code2'>store.js</button>
                <div className='canvas-div'>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>1</span> <span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue'>"redux";</span></p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>2</span></p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>3</span> <span className='red'>const</span> initialState <span className='red'>=</span> {'{ interested'} <span className='red'>: false</span> {'}'} ;</p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>4</span></p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>5</span> <span className="red"> const</span> <span className="green">reducer</span> <span className="red">=</span> (state <span className="red">=</span> initialState, action) <span className="red">{'=>'}</span> {'{'}</p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>6</span> <span style={{ paddingLeft: '14px' }}> <span className='red'>if</span> (action.type <span className='red'>===</span> <span className='blue'>"showInterest"</span>) {'{'}</span></p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>7</span> <span style={{ paddingLeft: '21px' }}><span className='red'>return</span> {'{'}</span></p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>8</span> <span style={{ paddingLeft: '28px' }}><span className="red">...</span> state,</span></p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>9</span> <span style={{ paddingLeft: '28px' }}>interested <span className="red">: true</span>,</span></p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>10</span> <span style={{ paddingLeft: '21px' }}>{'}'};</span></p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>11</span> <span style={{ paddingLeft: '14px' }}>{'}'}</span></p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>12</span></p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>13</span> <span style={{ paddingLeft: '14px' }}> <span className="red">return</span> state; </span></p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>14</span> {'}'};</p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>15</span></p>
                    <p><span style={{ color: "gray", cursor: 'none', paddingLeft: '7px' }}>16</span> <span className="red"> const</span> store <span className="red">=</span> <span className="green">createStore</span>(reducer);</p>
                </div>
            </div>
        </div>
    );
};

export default Section1;