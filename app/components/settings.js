import { useState, useEffect } from "react";

import { useSettings } from "../store/useSettings";

export default function Settings(){
    const [activeTab, setActiveTab] = useState('background');
    const {currentWallpaper, setWallpaper, brightness, setBrightness, setFont, currentFont} = useSettings();

    const wallpapers = [
        {id:'canyon', name:'Canyon', path:'/backgrounds/canyon.jpg'},
        {id:'mak-tahoe', name:'Mak Tahoe', path:'/backgrounds/maktahoe.jpg'},
        {id:'seuoia', name:'Sequoia', path:'/backgrounds/sequoia.jpg'},
        {id:'sunbeam', name:'Sunbeam', path:'/backgrounds/sunbeam.jpg'}
    ]

    const menuItems = [
        {id:'background', label:'Background', icon:'🖼️'},
        {id:'fonts', label:'Fonts & UI', icon:'Aa'},
        {id:'account', label:'Account', icon:'👤'},
    ]

    const fonts = [
        {id:'inter', name:'Inter', class:'font-inter'},
        {id:'geist', name:'Geist', class:'font-geist'},
        {id:'space-grotesk', name:'Space Grotesk', class:'font-spacegrotesk'},
        {id:'oswald', name:'Oswald', class:'font-oswald'}
    ]

    useEffect(() => {
        const savedActiveTab = sessionStorage.getItem('saved_active_tab');

        if(savedActiveTab){
            setActiveTab(savedActiveTab)
        }
    }, []);

    const handleTabChange = (id)  => {
        setActiveTab(id);
        sessionStorage.setItem('saved_active_tab', id);
    }

    const handleBrightnessChange = (val) => {
        setBrightness(val);
    }

    return(
        <div className="w-[600px] flex flex-row h-113 bg-transparent">
            <div className="h-full w-50 border-right border-white border-r-2 flex flex-col gap-2 p-2 mr-2">
                {
                    menuItems.map((item) => (
                        <div key={item.id} onClick={() => handleTabChange(item.id)} className="container-fluid items-center w-full p-2 bg-white/10 rounded border-white/20 hover:bg-white/20 flex flex-row gap-3 cursor-pointer">
                            <span className="mt-auto">
                                {item.icon}
                            </span>   
                            <p className="text text-md text-white">
                                {item.label}
                            </p>
                        </div> 
                    ))
                }
            </div>
            <div className="p-1 h-full w-fit">
                {
                    activeTab === 'background' && (
                        <div className="w-95 flex flex-col gap-2">
                            <p className="text text-white text-2xl">
                                Background
                            </p>
                            <hr />
                            <p className="text-white text-xl font-bold">
                                Choose desktop background
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {
                                    wallpapers.map((wallpaper) => (
                                        <div
                                        key={wallpaper.id}
                                        className={`aspect-video rounded-lg cursor-pointer transition-all pointer overflow-hidden border-2 ${currentWallpaper === wallpaper.path ? 'border-blue-500 ring-2 ring-blue-500/50' : 'border-white/10 hover:border-white/30'}`}
                                        onClick={() => setWallpaper(wallpaper.path)}
                                        >
                                            <img src={wallpaper.path} alt={wallpaper.id} className="w-full h-full object-cover" />
                                            <div className="relative inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                                <span className="text-[10px] text-white font-medium">{wallpaper.name}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="conatainer bg-white/20 backdrop-blur-md  h-[70px] flex flex-col gap-2 rounded-md py-1 px-2">
                                <p className="text text-white text-md">
                                    Brightness
                                </p>
                                <input type="range" defaultValue={brightness} min={0} max={200} onChange={(e) => handleBrightnessChange(e.target.value)}></input>
                            </div>
                        </div>
                    )
                }

                {
                    activeTab === 'fonts' && (
                        <div className="w-95 flex flex-col gap-2">
                            <p className="text text-white text-2xl">
                                Fonts & UI
                            </p>
                            <hr />
                            <p className="text-white text-xl font-bold">
                                Choose system font
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {
                                    fonts.map((font) => (
                                        <button key={font.id} onClick={() => setFont(font.class)} className={`rounded-lg cursor-pointer transition-all pointer overflow-hidden ${currentFont === font.class ? 'border-2' : 'border-1'} p-2 bg-white/10 backdrop-blur-md ${font.class}`}>
                                            <p className={`text text-bold text-md ${font.class}`}>
                                                {font.name}
                                            </p>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }

                {
                    activeTab === 'account' && (
                        <div className="w-95 flex flex-col gap-2">
                            <p className="text text-white text-2xl">
                                Account
                            </p>
                            <hr />
                        </div>
                    )
                }
            </div>
        </div>
    );
}