import Draggable from "react-draggable";
import { useRef, useState } from "react";

export default function Window({title, children, onClose, isMinimized, onMinimize, defaultPos, onWinStopDrag, ...props}){
    const nodeRef = useRef(null);

    return(
        <Draggable key={title-isMinimized} nodeRef={nodeRef} defaultPosition={defaultPos} onStop={(e, data) => onWinStopDrag(data.x, data.y)} className={``} handle=".window-header" bounds="parent" grid={[1, 1]}>
            <div ref={nodeRef} className={`absolute top-20 left-20 w-fit min-400 bg-zinc-900/90 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl flex-col overflow-hidden ${isMinimized ? 'pointer-events-none' : ''}`}>
                <div className={`window-header bg-white/10 p-2 flex-col justify-between ${isMinimized ? 'hidden' : 'flex'} justify-between cursor-grab active:cursor-grabbing`}>
                    <div className="flex flex-row justify-between">
                        <span className="text-xs text-gray-300 font-medium select-none capitalize">
                            {title}
                        </span>
                        <div className="flex gap-2 ml-1">
                            <button onClick={onClose} className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" />
                            <button onClick={onMinimize} className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer" />
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                    </div>
                    <div className="w-full h-[1px] my-1 bg-white" />
                    <div className="w-12" />
                    <div className="p-2 text-white max-h-[470px] overflow-y-auto custom-scrollbar">
                        {children}
                    </div>
                </div>

            </div>
        </Draggable>
    );
}