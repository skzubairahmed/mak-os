import WallpaperHandler from "./components/wallPaperLoader";
import IconHandler from "./components/iconLoader";
import RealTimeClock from "./components/rtc";

  const DESKTOP_ICONS = [
    {id:'about-me', name:'About Me', icon:'/icons/diary.svg', color:'#222'},
    {id:'socials', name:'Socials', icon:'/icons/socials.svg', color:'#222'},
    {id:'settings', name:'Settings', icon:'/icons/settings.svg', color:'#222'},
  ];

export default function Home() {
  return (
    <div>
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
              <IconHandler app={app} key={app.id} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
