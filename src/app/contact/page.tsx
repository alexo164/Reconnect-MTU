import Image from "next/legacy/image";
import contactimg from "./contactimg.jpg"
import { ContentsTypeTab } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Connect with us for exceptional content. Reach out via Email. Your input matters!",
    keywords:
        "contact us, get in touch, reach out, email, customer service, inquiries, feedback",
};

function Contact() {

    return (
        <>
            {/* IMAGE
            <section className="bg-white w-100 items-center py-2">
                <div className="flex justify-center">
                    <Image
                        height={400}
                        width={700}
                        quality={100}
                        src={contactimg}
                        alt='Reconnect'
                    />
                </div>
            </section> */}

            {/* Contact Us content */}
            <section className='m-4 mt-1 dark:bg-slate-900 dark:text-white'>
                <div className='container px-0 pb-[10px] pt-[5px] md:px-[15px]'>
                    <div className="pt-10">
                        <div className="text-white text-3xl pb-1 relative">
                            Contact Us
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 to-blue-400 to-pink-400 to-yellow-400 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                            <div className="p-4">
                                <div className="grid grid-cols-2 gap-4 text-white">

                                    <div className="col-span-1 row-span-3 p-4">{/* Profile Image 1 */}
                                        <div className="w-100 h-100 mx-10 py-10 bg-slate-300 rounded-full flex items-center justify-center text-white text-5xl font-bold">O</div>
                                    </div>

                                    <div className="col-span-1 p-4 border-t-4 border-blue-400">Name: </div>
                                    <div className="col-span-1 p-4">Email: </div>
                                    <div className="col-span-1 p-4">Office: </div>

                                    <div className="col-span-1 row-span-3 p-4">{/* Profile Image 2 */}
                                        <div className="w-100 h-100 mx-10 py-10 bg-slate-300 rounded-full flex items-center justify-center text-white text-5xl font-bold">O</div>
                                    </div>

                                    <div className="col-span-1 p-4 border-t-4 border-blue-400">Name: </div>
                                    <div className="col-span-1 p-4">Email: </div>
                                    <div className="col-span-1 p-4">Office: </div>
                                </div>
                            </div>

                            <div className="p-5">
                                    {/* <form onSubmit={handleSubmit}> */}
                                    <form>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-white">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                // value={formData.firstName}
                                                // onChange={handleChange}
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-white">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                // value={formData.lastName}
                                                // onChange={handleChange}
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-white">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                // value={formData.email}
                                                // onChange={handleChange}
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-white">Inquiry</label>
                                            <textarea
                                                name="description"
                                                // value={formData.description}
                                                // onChange={handleChange}
                                                placeholder="Enter your description here"
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
            </section>
        </>
    );
};

export default Contact;
