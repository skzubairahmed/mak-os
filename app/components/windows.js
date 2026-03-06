import Draggable from "react-draggable";
import { useRef, useState } from "react";

export default function Window({title, children, onClose, height}){
    const nodeRef = useRef(null);

    return(
        <Draggable nodeRef={nodeRef} handle=".window-header" bounds="parent" grid={[1, 1]}>
            <div ref={nodeRef} className="absolute top-20 left-20 w-fit min-400 bg-zinc-900/90 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl flex flex-col overflow-hidden">
                <div className="window-header bg-white/10 p-2 flex items-center justify-between cursor-grab active:cursor-grabbing">
                    <div className="flex gap-2 ml-1">
                        <button onClick={onClose} className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-xs text-gray-300 font-medium select-none capitalize">
                        {title}
                    </span>
                    <div className="w-12" />
                </div>

                <div className="p-2 text-white max-h-[470px] overflow-y-auto custom-scrollbar">
                    {children}
                </div>
            </div>
        </Draggable>
    );
}