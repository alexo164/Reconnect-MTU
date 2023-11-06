import { Metadata } from "next";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP'



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
          <div className="col-span-1 bg-blue-300 p-4">
            Photo 1
          </div>
          <div className="col-span-1 bg-green-300 p-4">
            Photo 2
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Content;

