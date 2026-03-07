"use client"

import WallpaperHandler from "./components/wallPaperLoader";
import IconHandler from "./components/iconLoader";
import RealTimeClock from "./components/rtc";
import Window from "./components/windows";

import AboutMeComponent from "./components/aboutMe";
import Socials from "./components/socials";

import { useState, useEffect } from "react";

  const DESKTOP_ICONS = [
    {id:'about me', name:'About Me', icon:'/icons/diary.svg', color:'#222', x:20, y:20},
    {id:'socials', name:'Socials', icon:'/icons/socials.svg', color:'#222', x:20, y:20},
    {id:'settings', name:'Settings', icon:'/icons/settings.svg', color:'#222', x:20, y:20},
  ];

  const APPS = {
    'about me':<AboutMeComponent/>,
    'socials':<Socials />,
  }

export default function Home() {
  const [openWindows, setOpenWindows] = useState([]);
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedWindows = sessionStorage.getItem("os_open_windows");
    const savedMinimized = sessionStorage.getItem("os_minimized_windows");
    if(savedWindows && savedWindows !== 'undefined'){
      try{
        setOpenWindows(JSON.parse(savedWindows));
      }catch(error){
        console.error("Failed to parse open windows from storage:", error);
        sessionStorage.removeItem("os_open_windows");
      }
    }

    if(savedMinimized && savedMinimized !== 'undefined'){
      try{
        setMinimizedWindows(JSON.parse(savedMinimized));
      }catch(error){
        console.error("Failed to parse minimized windows from storage:", error);
        sessionStorage.removeItem("os_minimized_windows");
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if(isLoaded){
      sessionStorage.setItem("os_open_windows", JSON.stringify(openWindows));
      sessionStorage.setItem("os_minimized_windows", JSON.stringify(minimizedWindows));
    }
  }, [openWindows, minimizedWindows, isLoaded]);

  const openApp = (id) => {
    const exists = openWindows.find(win => win.id === id);

    if(!exists){
      setOpenWindows([...openWindows, {id, x:20, y:20}]);
    }else{
      setMinimizedWindows(minimizedWindows.filter(appId => appId !== id));
    }
  }

  const updateWindowPos = (id, x, y) => {
    setOpenWindows(prev => prev.map(win => 
      win.id === id ? { ...win, x, y } : win
    ));
  };

  const toggleMinimized = (id) => {
    setMinimizedWindows((prev) => 
      prev.includes(id)
        ? prev.filter(appId => appId !== id)
        : [...prev, id], console.log('tried')                     
    );
  }

  const closeApp = (id) => {
    setOpenWindows(openWindows.filter(win => win.id !== id));
  }

  if (!isLoaded) return <div className="bg-black h-screen w-screen" />
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <WallpaperHandler />
        <div className="flex flex-col gap-4">
            <div className="contianer-fluid p-1 bg-black flex flex-row justify-between mb-3">
              <div className="flex flex-row gap-3">
                {
                  openWindows.map((win) => (
                    <button key={win.id} style={{zIndex:999}} onClick={() => toggleMinimized(win.id)} className={`${minimizedWindows.includes(win.id) ? 'bg-gray-500' : 'bg-blue-500'} button text-white capitalize border-2-white px-2 rounded-md cursor-pointer`}>
                      {win.id}
                    </button>
                  ))
                }
              </div>
              <span className="text-white text-lg">
                <RealTimeClock />
              </span>
            </div>
            <div className="fixed inset-0 p-4 mt-2 pt-10 flex flex-col flex-wrap content-start gap-4">
              {
                DESKTOP_ICONS.map((app) => (
                  <IconHandler app={app} key={app.id} onClick={() => openApp(app.id)}/>
                ))
              }
            </div>
        </div>
        {
          openWindows.map((win) => {
            return(
              <Window key={win.id} title={win.id} onClose={() => closeApp(win.id)} onMinimize={() => toggleMinimized(win.id)} isMinimized={minimizedWindows.includes(win.id)} defaultPos={{x: win.x, y: win.y}} onWinStopDrag={(x, y) => updateWindowPos(win.id, x, y)}>
                {APPS[win.id]}
              </Window>
            )
          })
        }
    </div>
  );
}
