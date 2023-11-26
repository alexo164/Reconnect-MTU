import { Metadata } from "next";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'
import Link from "next/link";


export const metadata: Metadata = {
  title:'Content',
  description: `Get to know the ${WEBSITE_NAME} team better through our profiles. Explore our expertise in technology, coding, and more.`,
  keywords: `profiles,${WEBSITE_NAME} team, technology, coding expertise`,
};


function Content() {
  return (
    <>
      <section className="dark:bg-slate-900 dark:text-white my-14 mx-4">
        <div className="flex flex-col">

          <Link href='/documents' className="my-5">
            <div className="text-white h-20 bg-gradient-to-r from-green-500 to-cyan-300 text-center flex items-center justify-center font-semibold text-xl rounded-full">
              Research Documents
            </div>
          </Link>

          <Link href='/photos' className="my-5">
            <div className="flex-grow text-white h-20 bg-gradient-to-r from-cyan-500 to-blue-500 text-center flex items-center justify-center font-semibold text-xl rounded-full">
              Photos
              
            </div>
          </Link>

          <Link href='/videos' className="my-5">
            <div className="text-white h-20 bg-gradient-to-r from-purple-400 to-pink-400 text-center flex items-center justify-center font-semibold text-xl rounded-full">
              Videos
            </div>
          </Link>
        </div>
      </section>

     
    </>
  );
};

export default Content;

