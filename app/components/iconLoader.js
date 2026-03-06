'use client';

import Image from "next/image";

export default function IconHandler({app, onClick}){
    return(
        <button
        onClick={() => onClick(app.id)}
        className="hover:cursor-pointer group flex flex-col items-center gap-2 transition-transform duration-200 active:scale-90"
        >
            <div
            className="relative w-15 p-2 h-15 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
            style={{backgroundColor:app.color}}
            >
                <Image
                src={app.icon}
                alt={app.name}
                width={60}
                height={60}
                className="drop-shadow-md"
                />
            </div>

            <span className="text-white text-sm font-medium drop-shadow-md opacity-80 group-hover:opacity-100">
                {app.name}
            </span>
        </button>
    );
}