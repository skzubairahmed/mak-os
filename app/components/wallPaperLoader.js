'use client';

import { useWallpaper } from "../store/useWallpaper";
import Image from "next/image";

export default function WallpaperHandler(){
    const {currentWallpaper, brightness} = useWallpaper();
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
            className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
        </div>
    );
}