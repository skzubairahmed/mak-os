'use client';

import {useState, useEffect} from 'react';

export default function RealTimeClock(){
    const [time, setTime] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString().toUpperCase());
        };

        updateClock();
        const timer = setInterval(updateClock, 1000);

        return () => clearInterval(timer);
    }, []);

    if(!mounted) return <div><p>Loading local time...</p></div>;

    return(
        <div>
            <p className="text-lg text-white">{time}</p>
        </div>
    );
}