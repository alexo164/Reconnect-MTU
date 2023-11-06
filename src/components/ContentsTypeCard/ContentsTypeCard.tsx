import { getRandomGradientColor } from "@/utils/utils";
import Link from "next/link";
import { allTypesContent } from "@/data";

const ContentsTypeCard = () => {
    const styleCss =
        "flex rounded-full from-blue-300 to-purple-300 px-4 pb-2 pt-2 text-white hover:text-white shadow-md hover:shadow-none transition-all mr-5 bg-gradient-to-r text-xl cursor-pointer transform hover:scale-105 w-auto";
    return (
        <>
            {allTypesContent.map((content, index) => {
                return (
                    <Link href={content.url} key={index}>
                        <span
                            className={styleCss}
                            style={{
                                background: `${getRandomGradientColor()}`,
                            }}
                        >
                            {content.name}
                        </span>
                    </Link>
                );
            })}

        </>
    );
};

export default ContentsTypeCard;
