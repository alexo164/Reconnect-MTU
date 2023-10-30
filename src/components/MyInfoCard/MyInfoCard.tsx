import { getRandomGradientColor } from "@/utils/utils";
import Link from "next/link";
import Image from "next/legacy/image";
import ReconnectPic from "./photo.jpg";
import NTUPic from "./ntu-logo.png";

const MyInfoCard = () => {
    const styleCss =
        "flex items-center justify-start rounded-md from-blue-300 to-purple-300 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2 bg-gradient-to-r text-xl pt-2 cursor-pointer transform hover:scale-105 w-auto";
    return (
        <>
            <div className='flex flex-wrap justify-center'>
                <div className='pt-5 m-2 rounded-full mx-10 shadow-lg'>
                    <Image
                        height={130}
                        width={240}
                        quality={100}
                        className='rounded-full'
                        src={ReconnectPic}
                        alt='Reconnect'
                    />
                </div>
                <div className='pt-5 m-2 rounded-full mx-10 shadow-lg'>
                <Image
                        height={130}
                        width={240}
                        quality={100}
                        className='rounded-full'
                        src={NTUPic}
                        alt='Reconnect'
                    />
                </div>
                
            </div>
        </>
    );
};

export default MyInfoCard;
