"use client"

import WallpaperHandler from "./components/wallPaperLoader";
import IconHandler from "./components/iconLoader";
import RealTimeClock from "./components/rtc";
import Window from "./components/windows";

import AboutMeComponent from "./components/aboutMe";
import Socials from "./components/socials";

import { useState } from "react";

  const DESKTOP_ICONS = [
    {id:'about me', name:'About Me', icon:'/icons/diary.svg', color:'#222'},
    {id:'socials', name:'Socials', icon:'/icons/socials.svg', color:'#222'},
    {id:'settings', name:'Settings', icon:'/icons/settings.svg', color:'#222'},
  ];

  const APPS = {
    'about me':<AboutMeComponent/>,
    'socials':<Socials />,
  }

export default function Home() {
  const [openWindows, setOpenWindows] = useState([]);

  const openApp = (id) => {
    if(!openWindows.includes(id)){
      setOpenWindows([...openWindows, id]);
    }
  }

  const closeApp = (id) => {
    setOpenWindows(openWindows.filter(appId => appId !== id));
  }
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <WallpaperHandler />
        <div className="flex flex-col gap-4">
            <div className="contianer-fluid p-1 bg-black flex flex-row justify-center mb-2">
              <span className="text-white text-lg">
                <RealTimeClock />
              </span>
            </div>
            <div className="fixed inset-0 p-4 pt-10 flex flex-col flex-wrap content-start gap-4">
              {
                DESKTOP_ICONS.map((app) => (
                  <IconHandler app={app} key={app.id} onClick={() => openApp(app.id)}/>
                ))
              }
            </div>
        </div>
        {
          openWindows.map((id) => {
            return(
              <Window key={id} title={id} onClose={() => closeApp(id)}>
                {APPS[id]}
              </Window>
            )
          })
        }
    </div>
  );
}
