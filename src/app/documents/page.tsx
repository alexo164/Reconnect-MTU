import { Metadata } from "next";
import {WEBSITE_NAME} from '@/constants/_APP_SETUP';



export const metadata: Metadata = {
  title:'Research Documents',
  description: `Get to know the ${WEBSITE_NAME} team better through our profiles. Explore our expertise in technology, coding, and more.`,
  keywords: `profiles,${WEBSITE_NAME} team, technology, coding expertise`,
};


function Documents() {
  return (
    <>
      <section className="dark:bg-slate-900 dark:text-white my-14 mx-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 bg-slate-200 rounded p-4 dark:bg-slate-900">


            <object
              data={"https://drive.google.com/file/d/1uOBT0XtpR39bu7uH_E-Us-cXRV7rJJ78/preview"}
              type="application/pdf"
              width="100%"
              height="800vh"
            >
              <p>Unable to display PDF file. <a href={"https://drive.google.com/file/d/1uOBT0XtpR39bu7uH_E-Us-cXRV7rJJ78/view?usp=drive_link"} target="_blank" rel="noopener noreferrer">Download</a> instead.</p>
            </object>
          </div>


          <div className="col-span-1 bg-slate-200 rounded p-4 dark:bg-slate-900">
          <object
              data={"https://drive.google.com/file/d/1kk89PID6nRVu7BTCxrn4_tjSKudyBcxw/preview"}
              type="application/pdf"
              width="100%"
              height="800vh"
            >
              <p>Unable to display PDF file. <a href={"https://drive.google.com/file/d/1kk89PID6nRVu7BTCxrn4_tjSKudyBcxw/view?usp=sharing"} target="_blank" rel="noopener noreferrer">Download</a> instead.</p>
            </object>
          </div>

          <div className="col-span-1 bg-slate-200 rounded p-4 dark:bg-slate-900">
            <object
              data={"https://drive.google.com/file/d/1yvgDBsoXdNNzrW1FZ0RndJhXabUzDhrf/preview"}
              type="application/pdf"
              width="100%"
              height="800vh"
            >
              <p>Unable to display PDF file. <a href={"https://drive.google.com/file/d/1yvgDBsoXdNNzrW1FZ0RndJhXabUzDhrf/view?usp=sharing"} target="_blank" rel="noopener noreferrer">Download</a> instead.</p>
            </object>
          </div>
          
          <div className="col-span-1 bg-slate-200 rounded p-4 dark:bg-slate-900">
          <iframe
              src={"https://library.iated.org/view/OBRIEN2023REC"}
              width="100%"
              height="800vh"
              suppressHydrationWarning={true}
            >
              <p>Unable to display website. Visit <a href={"https://library.iated.org/view/OBRIEN2023REC"} target="_blank" rel="noopener noreferrer">here</a> instead.</p>
            </iframe>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Documents;

