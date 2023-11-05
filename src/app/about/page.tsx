import { ContentsTypeTab } from "@/components";
import { Metadata } from "next";
import { META_DESCRIPTION, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import { SanityDocument } from "@sanity/client";
import { getAboutQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import Image from "next/legacy/image";
import row1pic from "./row1.jpg";
import row2pic from "./row2.jpg"

export const metadata: Metadata = {
    title: "About",
    description: META_DESCRIPTION,
    keywords: META_SEO_KEYWORDS,
};

const About = async () => {
    const about = await sanityFetch<SanityDocument>({
        query: getAboutQuery,
    });
    const getFirstAbout = about[0];

    return (
        <>
            <section className='m-4 mt-10 dark:bg-slate-900 dark:text-white'>
                <div className='container px-0 pb-[10px] pt-[5px] md:px-[15px]'>
                <ContentsTypeTab />
                    <div className="pt-10">
                        <div className="text-white text-3xl pb-1 relative">
                            What is Reconnect about?
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 to-blue-400 to-pink-400 to-yellow-400 rounded-full"></div>
                        </div>
                        <div className="grid mt-10 grid-cols-2 grid-rows-2 gap-4">
                            <div className="bg-white p-4 text-lg rounded-2xl">
                                Reconnect is a workshop which has been developed in response to research evidence highlighting links between problematic internet use and reduced wellbeing. It has been developed with expertise from coaching consultants, psychologists, university staff, and university students.
                            </div>
                            <div className="bg-[#e62b79] p-4 rounded-2xl items-center">
                                <Image
                                    height={300}
                                    width={550}
                                    quality={100}
                                    src={row1pic}
                                    alt='Reconnect'
                                />
                            </div>
                            <div className="bg-[#e62b79] p-4 rounded-2xl">
                                <Image
                                    height={300}
                                    width={550}
                                    quality={100}
                                    src={row2pic}
                                    alt='Reconnect'
                                />
                            </div>
                            <div className="bg-white p-4 text-lg rounded-2xl">
                                The workshop empowers participants with techniques to make positive changes to their digital habits. There has been a hugely positive response from MTU university students and staff to the workshop. The workshop promotes discussion of and awareness of technology use.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
