'use client';

import {useState, useEffect} from 'react';

export default function RealTimeClock(){
    const [time, setTime] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString().toUpperCase());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if(!time) return <p>Loading local time...</p>;

    return(
        <div>
            <p className="text text-lg text-white">{time}</p>
        </div>
    );
}