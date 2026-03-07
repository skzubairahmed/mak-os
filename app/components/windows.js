import Draggable from "react-draggable";
import { useRef, useState } from "react";

export default function Window({title, children, onClose, isMinimized, onMinimize, defaultPos, onWinStopDrag, ...props}){
    const nodeRef = useRef(null);

    return(
        <Draggable key={title-isMinimized} nodeRef={nodeRef} defaultPosition={defaultPos} onStop={(e, data) => onWinStopDrag(data.x, data.y)} className={``} handle=".window-header" bounds="parent" grid={[1, 1]}>
            <div ref={nodeRef} className={`z-999 absolute top-20 left-20 w-fit min-400 bg-zinc-900/90 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl flex-col overflow-hidden ${isMinimized ? 'pointer-events-none' : ''}`}>
                <div className={`window-header items-center cursor-grab active:cursor-grabbing bg-white/10 py-1 px-2 flex-row justify-between ${isMinimized ? 'hidden' : 'flex'} justify-between`}>
                    <span className="text-xs text-gray-300 font-medium select-none capitalize">
                        {title}
                    </span>
                    <div className="flex flex-row justify-center gap-2 ml-1">
                        <button onClick={onClose} className="rounded-full cursor-pointer w-3 my-auto h-3 bg-red-400" />
                        <button onClick={onMinimize} className="rounded-full cursor-pointer w-3 my-auto h-3 bg-yellow-400" />
                        <button className="rounded-full cursor-pointer w-3 h-3 my-auto bg-green-400" />
                    </div>
                </div>
                <div className={`${isMinimized ? 'hidden' : 'flex'} text-white max-h-[470px] overflow-y-auto custom-scrollbar`}>
                    {children}
                </div>
            </div>
        </Draggable>
    );
}