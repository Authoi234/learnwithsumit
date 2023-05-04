import React from 'react';
import './Section5.css'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Section5 = () => {
    const data = [
        {
            name: 'Page A',
            marks: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            marks: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            marks: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            marks: 2000,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            marks: 3890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            marks: 1000,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            marks: 0,
            pv: 4300,
            amt: 2100,
        },
    ];
    const data2 = [
        {
            name: 'Page A',
            marks: 0,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            marks: 1500,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            marks: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            marks: 3000,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            marks: 3890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            marks: 4000,
            pv: 3800,
            amt: 2500,
        },
    ];
    return (
        <div>
            <div className='center'>
                <div data-aos={'fade-up'}>
                    <img width={'8%'} src="https://learnwithsumit.com/_next/static/media/peep4.d500693a.svg" alt="" />
                </div>
                <h2>কোর্সটি <span className='violet'> কিভাবে চলবে</span></h2>
                <h4>যেভাবে আমরা আপনাকে একজন দক্ষ রিডাক্স প্রোগ্রামার হয়ে উঠতে সাহায্য করতে পারি</h4>
            </div>
            <div className='d-flex-own'>
                <div style={{ width: '45%' }}>
                    <h2>1</h2>
                    <h2>ধাপে ধাপে প্রজেক্ট ভিত্তিক শেখানোর পদ্ধতি</h2>
                    <h4 style={{ wordBreak: 'break-all' }}>প্রতি সপ্তাহে দুটি করে মডিউল রিলিজ দেয়া হবে এবং প্রতিটি মডিউলে 10-12 টি প্রি-রেকোর্ডেড ভিডিও থাকবে যেন আপনারা ধাপে ধাপে একটার পর একটা টপিক শিখতে পারেন। ভিডিও গুলো প্রজেক্ট ভিত্তিক লার্নিং প্রসেস ফলো করে বানানো হয়েছে। সপ্তাহে দুটি করে মডিউল শেষ করার জন্য আপনারা ৫ দিন করে সময় পাবেন কারণ সপ্তাহের বাকি 2টি দিন এসাইনমেন্ট এবং লাইভ সেশনের জন্য থাকবে।</h4>
                </div>
                <div style={{ width: '40%', height: '400px' }}>
                    <img width={'100%'} src="https://media.istockphoto.com/id/1258009305/vector/adaptive-web-design-vector-concept-metaphor.jpg?s=1024x1024&w=is&k=20&c=aSxpUWKM2JlLEB698N67kkkgtEHsDnkEJzKgz5Z09ko=" alt="" />
                </div>
            </div>
            <div style={{ marginLeft: '15%' }}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <Legend></Legend>
                    <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <div>
                <div className='d-flex-own'>
                    <div style={{ width: '45%' }}>
                        <h2>2</h2>
                        <h2>পরীক্ষার মাধ্যমে নিজেকে যাচাই করার সুযোগ</h2>
                        <h4 style={{ wordBreak: 'break-all' }}>আপনারা ভিডিও দেখে কি শিখলেন সেটা যাচাই করার জন্য প্রতিটি ভিডিও এর সাথে কুইজ এবং প্রতিটি মডিউল শেষে এসাইনমেন্ট থাকছে। কুইজ গুলো আপনারা তাৎক্ষণিক উত্তর দিতে পারবেন এবং একেকটি এসাইনমেন্ট শেষ করার জন্য আপনারা সর্বোচ্চ 36 ঘন্টা সময় পাবেন। এসাইনমেন্ট করে সোর্স কোড এর গিটহাব লিঙ্ক & প্রজেক্টের লাইভ লিঙ্ক আমাদের কে জমা দিতে হবে। প্রতিটি কুইজ এবং এসাইনমেন্টের প্রাপ্ত নম্বর হিসাব রাখা হবে এবং কোর্স শেষে ফাইনাল রেজাল্ট দেয়া হবে। তবে কুইজ এর মার্ক লিডারবোর্ডে যোগ হলেও ফাইনাল রেসাল্ট এ যোগ করা হবে না।</h4>
                    </div>
                    <div style={{ width: '40%', height: '400px' }}>
                        <img width={'100%'} src="https://img.freepik.com/premium-vector/businessman-works-computer-office-workplace_316839-2364.jpg?w=740" alt="" />
                    </div>
                </div>
                <div className='center' style={{ marginLeft: '30%' }}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data2}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <Legend></Legend>
                        <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
                <div className='d-flex-own'>
                    <div style={{ width: '45%' }}>
                        <h2>3</h2>
                        <h2>পরীক্ষার পরে থাকছে প্রশ্নের সঠিক সমাধান</h2>
                        <h4 style={{ wordBreak: 'break-all' }}>প্রতিটি কুইজ এর শেষে আপনারা সঠিক উত্তর ব্যাখ্যা সহ দেখতে পারবেন। সবগুলো এসাইনমেন্টের সল্যুশন কোর্স শেষে গিটহাব - এ শেয়ার করে দেয়া হবে যেন আপনারা বেস্ট প্র্যাকটিস এবং পদ্ধতি গুলো আরো ভাল করে যাচাই করে নিতে পারেন। আপনাদের জমা দেয়া এসাইনমেন্ট আমরা ম্যানুয়ালি কোড রিভিউ করে মার্কিং করবো। মার্কশিট তৈরী হয়ে গেলে আপনারা ওয়েবসাইটে ব্যক্তিগত ড্যাশবোর্ড থেকে দেখে নিতে পারবেন।</h4>
                    </div>
                    <div style={{ width: '30%', height: '400px' }}>
                        <img width={'100%'} src="https://cdn.vectorstock.com/i/1000x1000/76/43/developer-working-on-laptop-vector-22287643.webp" alt="" />
                    </div>
                </div>
                <div style={{ marginLeft: '15%' }}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <Legend></Legend>
                        <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
                <div className='d-flex-own'>
                    <div style={{ width: '45%' }}>
                        <h2>4</h2>
                        <h2>আটকে গেলে সহায়তার জন্য ডিসকোর্ড সাপোর্ট গ্রুপ তো থাকছেই</h2>
                        <h4 style={{ wordBreak: 'break-all' }}>কোর্স চলাকালীন যেকোন সমস্যার সম্মুখীন হলে, কোথাও আটকে গেলে অথবা বুঝতে না পারলে, আপনার প্রশ্নটি আমাদের ডিসকোর্ড সাপোর্ট চ্যানেলে পোস্ট করতে পারবেন। যদি ডিসকোর্ড সাপোর্ট চ্যানেলের মাধ্যমে কোন জটিল সমস্যা সমাধান না করা যায়, তাহলে প্রয়োজনে ডিসকোর্ড ভয়েস চ্যানেল / গুগল মিটে কল করেও সমাধান করার চেষ্টা করা হবে। আমরা পুরো কোর্স জুড়ে আপনার সাথে থাকবো এবং সর্বাত্মক সহযোগিতা করার চেষ্টা করবো।</h4>
                    </div>
                    <div style={{ width: '45%', height: '400px' }}>
                        <img width={'100%'} src="https://elsner.b-cdn.net/wp-content/uploads/2020/08/Bigcommerce-Development-Service-Provider.svg" alt="" />
                    </div>
                </div>
                <div className='center' style={{ marginLeft: '30%' }}>
                    <LineChart
                        width={500}
                        height={200}
                        data={data2}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <Legend></Legend>
                        <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
                <div className='d-flex-own'>
                    <div style={{ width: '45%' }}>
                        <h2>5</h2>
                        <h2>আরো থাকছে সাপ্তাহিক লাইভ আলোচনা</h2>
                        <h4 style={{ wordBreak: 'break-all' }}>প্রতি সপ্তাহে আমরা একটি করে লাইভ সেশনের আয়োজন করবো যেখানে পুরো সপ্তাহে যা শেখানো হয়েছে সেটার উপর আলোচনা, এসাইনমেন্ট এর সল্যুশন বুঝিয়ে দেয়া এবং আপনাদের প্রশ্নের সরাসরি উত্তর দেয়া হবে। লাইভ সেশনের সময় আগের দিন আমাদের প্রাইভেট গ্রুপে জানিয়ে দেয়া হবে।</h4>
                    </div>
                    <div style={{ width: '45%', height: '400px' }}>
                        <img width={'100%'} src="https://img.freepik.com/premium-vector/videoconference-online-call-computer-vector-illustration-flat-style-eps-10_505557-938.jpg?w=740" alt="" />
                    </div>
                </div>
                <div style={{ marginLeft: '15%' }}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <Legend></Legend>
                        <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
                <div className='d-flex-own'>
                    <div style={{ width: '45%' }}>
                        <h2>6</h2>
                        <h2>কোর্স শেষে ফাইনাল পরীক্ষা</h2>
                        <h4 style={{ wordBreak: 'break-all' }}>পুরো কোর্সের সবগুলো মডিউল শেষ হবার পর অনলাইনে একটি ফাইনাল পরীক্ষা নেয়া হবে। ফাইনাল পরীক্ষায় একটি বড় এসাইনমেন্ট করতে দেয়া হবে। এসাইনমেন্ট রিভিউ করে তারপর আমরা রেজাল্ট পাবলিশ করবো। এই ফাইনাল পরীক্ষার মার্ক এবং আগের সকল এসাইনমেন্ট এর মার্ক যোগ করে আপনার পুরো কোর্সের রেজাল্ট শিট আপনাকে দেয়া হবে। এই রেজাল্টের উপর ভিত্তি করে <span className='violet'>প্রথম 11 জনকে</span> আমরা এক্সিলেন্স সার্টিফিকেট দিব। <span className='violet'>কমপক্ষে ৭০% মার্ক</span> প্রাপ্ত ছাত্ররা পাবেন জব রেকোমেন্ডেশন লেটার।</h4>
                    </div>
                    <div style={{ width: '45%', height: '400px' }}>
                        <img width={'100%'} src="https://img.freepik.com/free-vector/online-test-concept-illustration_114360-5596.jpg?w=740&t=st=1683115338~exp=1683115938~hmac=d90658ee3fe9773eed9c454cccc885774abf7b843425bf4267e6d9ee291aae8a" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section5;