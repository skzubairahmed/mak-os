'use client';

import { useSettings } from "../store/useSettings";
import Image from "next/image";

import {useState, useEffect} from 'react';

export default function WallpaperHandler(){
    const {currentWallpaper, brightness} = useSettings();

    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if(!mounted) return <div className='bg-black inset-10 fixed z-[-1]' />;

    return(
        <div className="fixed inset-0 -z-50 transition-all duration-700 ease-in-out"
        style={{filter:`brightness(${brightness}%)`}}
        >
            <Image
            src={currentWallpaper}
            alt="Default Desktop Background"
            fill
            priority
            quality={90}
            className="object-fit"
            />
            <div className="absolute inset-0 bg-black/20" />
        </div>
    );
}