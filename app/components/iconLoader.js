"use client";

import Image from "next/image";
import Draggable from "react-draggable";
import { useRef, useState } from "react";

export default function IconHandler({app, onClick}){
    const nodeRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleDrag = () => {
        setIsDragging(true);
    }

    const handleStopDrag = () => {
        setTimeout(() => setIsDragging(false), 100);
    }

    const handleIconClick = (e) => {
        if(!isDragging){
            onClick(app.id);
        }
    }
    return(
        <Draggable nodeRef={nodeRef} bounds="parent" handle=".icon-box" grid={[5, 5]} onDrag={handleDrag} onStop={handleStopDrag}>
            <div ref={nodeRef} className="icon-box w-fit h-fit pointer-events-auto active:cursor-grabbing">
                <button
                onClick={handleIconClick}
                className="hover:cursor-pointer group flex flex-col items-center gap-2 transition-transform duration-200 active:scale-90 active:cursor-grab"
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
                        className="drop-shadow-md pointer-events-none"
                        />
                    </div>

                    <span className="text-white text-sm font-medium drop-shadow-md opacity-80 group-hover:opacity-100 select-none">
                        {app.name}
                    </span>
                </button>
            </div>
        </Draggable>
    );
}