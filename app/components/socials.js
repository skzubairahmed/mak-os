import Link from "next/link";

export default function Socials(){
    const SOCIAL_IDS = [
        {id:'GitHub', image_url:'/icons/github.svg', alt:'github-logo', url:'https://github.com/skzubairahmed'},
        {id:'Instagram', image_url:'/icons/instagram.svg', alt:'instagram-logo', url:'https://instagram.com/_zubair.jar_'},
        {id:'Buy me a coffee', image_url:'/icons/bmac.svg', alt:'bmac-logo', url:'https://buymeacoffee.com/skzubairahmed'}
    ];

    return(
        <div className="h-full w-full flex flex-col gap-2">
            <div className="container w-[365] gap-3 flex flex-col p-3">
                <div className="flex flex-row">
                    <h1 className="text text-xl">
                        My Socials
                    </h1>
                </div>
                <hr />
                <div className="flex flex-wrap gap-5">
                    {
                        SOCIAL_IDS.map((social) => (
                            <div className="w-40 h-45 text-white backdrop-blur-600 rounded-lg p-4 text-black flex flex-col gap-1 items-center border-2 border-white">
                                <img src={social.image_url} alt={social.alt} className="h-20 w-20" />
                                <span>{social.id}</span>
                                <Link href={social.url} target="_blank">
                                    <button className="py-1 px-3 cursor-pointer bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white text-white rounded-md">
                                        View
                                    </button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}