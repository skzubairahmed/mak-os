import { Key, Val, ValGreen, ValPurple } from "./helpers";

export default function AboutMeComponent(){
    return(
        <div className="h-full w-full flex flex-col gap-2">
            <div className="container gap-3 flex flex-col p-3">
                <div className="flex flex-row">
                    <h1 className="text text-xl">
                        Sk Zubair Ahmed
                    </h1>
                </div>
                <hr />
                <div className=" whitespace-pre-wrap">
                    <pre>
                    <Key>Name</Key> = <ValGreen>"Sk Zubair Ahmed 👨‍💻"</ValGreen>{"\n"}
                    <Key>Age</Key> = <ValPurple>16</ValPurple>{"\n"}
                    <Key>Country</Key> = <ValGreen>"India 🇮🇳"</ValGreen>{"\n"}
                    <Key>Timezone</Key> = <ValGreen>"IST (GMT + 5:30) 🕰️"</ValGreen>{"\n"}
                    <Key>Pronouns</Key> = <Val>["He", "Him"]</Val>{"\n"}
                    <Key>Interests</Key> = <Val>["Coding", "Computers", "Robotics", "Ragebaiting"]</Val>{"\n"}
                    <Key>Education</Key> = <ValGreen>"दसवी Pass (High School)"</ValGreen>{"\n"}
                    <Key>Operating System</Key> = <ValGreen>"Debian 13"</ValGreen>{"\n"}
                    </pre>
                    <hr className="my-4" />
                    <pre>
                    <Key>languages</Key> = [<Val>"Java", "JavaScript", "Python", "Rust", "C"</Val>]{"\n"}
                    <Key>frameworks</Key> = [<Val>"Express", "Flask", "Node.js"</Val>]{"\n"}
                    <Key>frontend</Key>   = [<Val>"React", "Next.js", "Vite", "Tailwind"</Val>]{"\n"}
                    <Key>database</Key>   = [<Val>"MySQL", "MongoDB", "KV"</Val>]{"\n"}
                    <Key>robotics</Key>   = [<Val>"Arduino", "ESP32"</Val>]{"\n"}
                    </pre>
                </div>
            </div>            
        </div>
    )
}