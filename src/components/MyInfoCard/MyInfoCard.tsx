import Image from "next/legacy/image";
import ReconnectPic from "./photo.jpg";
import NTUPic from "./ntu-logo.png";

const MyInfoCard = () => {
    const styleCss =
        "flex justify-start rounded-md from-blue-300 to-purple-300 px-1 text-white hover:text-white hover:shadow-none transition-all bg-gradient-to-r text-xl cursor-pointer transform hover:scale-105 w-auto";
    return (
        <>
            <div className='flex flex-wrap'>

                    <Image
                        height={80}
                        width={145}
                        quality={100}
                        className="rounded-full"
                        src={ReconnectPic}
                        alt='Reconnect'
                    />

                <Image
                        height={80}
                        width={145}
                        quality={100}
                        className="rounded-full"
                        src={NTUPic}
                        alt='Reconnect'
                    />
                
            </div>
        </>
    );
};

export default MyInfoCard;
