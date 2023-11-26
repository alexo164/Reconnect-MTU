import { Metadata } from "next";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'
import Image from "next/legacy/image";

import connected from "./Connected.jpg"
import phoneeating from "./phoneeating.jpg"
import pullingfor from "./pullingfor.jpg"
import socialyourmedia from "./socialisyourmedia.jpg"
import wingshandcuffs from "./wingshandcuffs.jpg"
import yingyang from "./yingyang.jpg"


export const metadata: Metadata = {
  title:'Photos',
  description: `Get to know the ${WEBSITE_NAME} team better through our profiles. Explore our expertise in technology, coding, and more.`,
  keywords: `profiles,${WEBSITE_NAME} team, technology, coding expertise`,
};


function Content() {
  return (
    <>
      <section className="dark:bg-slate-900 dark:text-white my-14 mx-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 bg-slate-200 rounded p-4 dark:bg-slate-900">
          <Image
                        height={720}
                        width={1280}
                        quality={100}
                        className="rounded"
                        src={connected}
                        alt='Connected'
                    />
          </div>
          <div className="col-span-1 bg-slate-200 rounded p-4 dark:bg-slate-900">
          <Image
                        height={720}
                        width={1280}
                        quality={100}
                        className="rounded"
                        src={wingshandcuffs}
                        alt='Phone with wings and handcuffs'
                    />
          </div>
          <div className="col-span-1 bg-slate-200 rounded p-4 dark:bg-slate-900">
          <Image
                        height={720}
                        width={1280}
                        quality={100}
                        className="rounded"
                        src={pullingfor}
                        alt='Who ya pulling for?'
                    />
          </div>
          <div className="col-span-1 bg-slate-200 rounded p-4 dark:bg-slate-900">
          <Image
                        height={720}
                        width={1280}
                        quality={100}
                        className="rounded"
                        src={socialyourmedia}
                        alt='How social is your media?'
                    />
          </div>
          <div className="col-span-1 bg-slate-200 rounded p-4 dark:bg-slate-900">
          <Image
                        height={720}
                        width={1280}
                        quality={100}
                        className="rounded"
                        src={phoneeating}
                        alt='Phone eating time'
                    />
          </div>
          <div className="col-span-1 bg-slate-200 rounded p-4 dark:bg-slate-900">
          <Image
                        height={720}
                        width={1280}
                        quality={100}
                        className="rounded"
                        src={yingyang}
                        alt='Yinh and Yank'
                    />
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Content;

