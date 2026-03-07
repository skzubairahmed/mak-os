import { useState, useEffect } from "react";

export default function Settings(){
    const [activeTab, setActiveTab] = useState('background');

    const menuItems = [
        {id:'background', label:'Background', icon:'🖼️'},
        {id:'fonts', label:'Fonts & UI', icon:'Aa'},
        {id:'account', label:'Account', icon:'👤'},
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

    return(
        <div className="w-150 flex flex-row h-113 bg-transparent">
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