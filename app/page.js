"use client"

import WallpaperHandler from "./components/wallPaperLoader";
import IconHandler from "./components/iconLoader";
import RealTimeClock from "./components/rtc";
import Window from "./components/windows";

import { useState } from "react";

  const DESKTOP_ICONS = [
    {id:'about-me', name:'About Me', icon:'/icons/diary.svg', color:'#222'},
    {id:'socials', name:'Socials', icon:'/icons/socials.svg', color:'#222'},
    {id:'settings', name:'Settings', icon:'/icons/settings.svg', color:'#222'},
  ];

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
                

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget molestie orci. Quisque nec ex tortor. Sed imperdiet ante quis mollis suscipit. Quisque volutpat ex vitae ex aliquet, a dapibus diam gravida. Vivamus aliquet nibh in erat imperdiet, nec varius augue aliquam. Duis sed nunc lobortis, dignissim arcu a, fringilla tortor. Duis efficitur vehicula ultricies.

Suspendisse dignissim arcu non congue ullamcorper. Maecenas vitae neque at leo semper gravida nec vitae nisl. Nulla tristique orci eget sollicitudin porttitor. Aliquam pellentesque tincidunt felis sed faucibus. Etiam ac nibh et turpis ornare condimentum non in neque. In interdum efficitur risus a faucibus. Donec sed consequat urna. Nulla et auctor nulla. Suspendisse posuere risus ipsum, sit amet congue enim rutrum ac. Cras eget ex interdum, ornare nisi at, vestibulum lorem. Ut lacinia diam gravida enim cursus tempus.

Suspendisse sit amet lorem interdum, consectetur quam pellentesque, tristique sem. Pellentesque imperdiet ac velit at sagittis. Morbi vitae scelerisque arcu. Suspendisse id quam eu neque tempus gravida sed vitae neque. Maecenas quis sem rhoncus, ultricies nibh ac, suscipit dui. Cras interdum nisl non nisi ultrices cursus. Ut vestibulum vel massa vel semper. Proin sapien velit, imperdiet id dapibus eget, congue in purus.

Sed accumsan purus metus, at tristique velit egestas in. Ut maximus, sem at consectetur rhoncus, leo metus euismod sem, nec facilisis enim orci ac lorem. Mauris posuere, velit sed scelerisque interdum, ante lacus dignissim neque, non finibus orci libero id orci. Cras volutpat tellus quam, accumsan dignissim risus posuere sit amet. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sollicitudin dui diam, sed interdum tortor feugiat eget. Vestibulum blandit velit finibus, dignissim ligula sit amet, pretium nulla. Sed ac est feugiat, dignissim mi quis, volutpat nisl.

Integer est magna, vehicula sollicitudin elit non, viverra pharetra massa. Ut sit amet malesuada quam, ac gravida nisl. Nullam lacus orci, molestie sit amet diam sed, aliquet tempus arcu. Nunc felis enim, dignissim at pretium dapibus, tempus ac arcu. Praesent facilisis ex sit amet elit interdum, gravida porttitor ipsum rhoncus. Duis molestie turpis non sollicitudin laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
              </Window>
            )
          })
        }
    </div>
  );
}
