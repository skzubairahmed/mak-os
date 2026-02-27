import WallpaperHandler from "./components/wallPaperLoader";
import IconHandler from "./components/iconLoader";

  const DESKTOP_ICONS = [
    {id:'about-me', name:'About Me', icon:'/icons/diary.svg', color:'#222'},
    {id:'socials', name:'Socials', icon:'/icons/socials.svg', color:'#222'},
    {id:'settings', name:'Settings', icon:'/icons/settings.svg', color:'#222'},
  ];

export default function Home() {
  return (
    <div>
      <WallpaperHandler />
      <div className="fixed inset-0 p-4 pt-10 flex flex-col flex-wrap content-start gap-4">
        {
          DESKTOP_ICONS.map((app) => (
            <IconHandler app={app} key={app.id} />
          ))
        }
      </div>
    </div>
  );
}
