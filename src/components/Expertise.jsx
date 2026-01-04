
import React from "react";
const Expertise = () => {
    return (
        <section className="expertise-section p-7">
            <div className="flex flex-col items-center justify-center gap-3">
                <h2 className="text-4xl">Expertise</h2>
                <p>I've had the opportunity to put my hands on</p>
            </div>
            <div className="flex justify-center gap-6 md:gap-10 p-4 sm:p-6 md:p-10 flex-wrap" >
                <div className="border group border-gray-400 hover:bg-gray-600 transition-all duration-300  p-6 h-64 flex flex-col  align-bottom  justify-end rounded-2xl
               w-full  sm:w-[48%]  md:w-1/4 gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                        fill="currentColor" viewBox="0 0 24 24" className="group-hover:text-green-500 transition-all duration-300 w-10 h-10">
                        {/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}
                        <path d="M9.71 16.29 5.41 12l4.3-4.29-1.42-1.42L2.59 12l5.7 5.71zM15.71 17.71l5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z"></path>
                    </svg>

                    <div className="text-2xl w-5 group-hover:text-white" >Web Development</div>
                </div>
                <div className="border group border-gray-400 hover:bg-gray-600 transition-all duration-300 p-6 h-64 flex flex-col  align-bottom  justify-end rounded-2xl
                                w-full sm:w-[48%]   md:w-1/4 gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                        fill="currentColor" viewBox="0 0 24 24" className="group-hover:text-green-500 transition-all duration-300 w-10 h-10">
                        {/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}
                        <path d="m17.84,4.9c-.81-.56-1.79-.9-2.85-.9-.92,0-2.1.35-3.52,1.06-1.12.56-2.36.9-3.53,1.21-1.64.43-3.08,1.36-4.17,2.69-2.37,2.89-2.39,7.1-.06,10.01,1.43,1.79,3.56,2.89,5.83,3.02.15,0,.3.01.44.01,2.12,0,4.16-.84,5.66-2.34,1.1-1.1,1.85-2.47,2.17-3.97.22-1.05.6-2.11,1.11-3.15.71-1.42,1.06-2.61,1.06-3.53,0-.97-.29-1.87-.77-2.63.4-.55,1.24-1.37,2.77-1.37v-2c-2.12,0-3.42,1.02-4.16,1.9Zm-.7,6.74c-.59,1.2-1.02,2.42-1.28,3.62-.24,1.12-.8,2.15-1.62,2.98-1.21,1.21-2.88,1.84-4.58,1.75-1.73-.1-3.28-.9-4.38-2.27-1.72-2.15-1.7-5.37.04-7.5.82-1,1.91-1.71,3.13-2.03,1.27-.33,2.61-.71,3.91-1.35,1.11-.55,2.04-.85,2.63-.85,1.66,0,3,1.35,3,3,0,.59-.3,1.53-.85,2.64Z"></path>
                    </svg>
                    <div className="text-2xl w-15 group-hover:text-white">

                        Data Structure & Algorithms
                    </div>
                </div>
                <div className="border group hover:bg-gray-600 transition-all duration-300 border-gray-400 p-6 h-64 flex flex-col  align-bottom  justify-end rounded-2xl
                                w-full sm:w-[48%]   md:w-1/4 gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                        fill="currentColor"

                        className="group-hover:text-green-500 transition-all duration-300 w-10 h-10  " viewBox="0 0 24 24">
                        {/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}
                        <path d="m12,6c-4.41,0-8,3.59-8,8s3.59,8,8,8,8-3.59,8-8c0-3.47-2.23-6.43-5.33-7.53,1.28-1.51,3.19-2.47,5.33-2.47v-2c-1.61,0-3.12.43-4.42,1.17-.62-.44-1.89-1.17-3.58-1.17-2.4,0-4,1.5-4,1.5,0,0,1.6,1.5,4,1.5.55,0,1.04-.08,1.5-.2-.36.38-.7.79-.99,1.23-.17-.01-.34-.03-.51-.03Zm6,8c0,3.31-2.69,6-6,6s-6-2.69-6-6,2.43-5.73,5.52-5.98c-.31.88-.49,1.81-.51,2.79-.76-.3-1.16-.85-1.18-.88l-1.66,1.12c.05.08,1.33,1.94,3.83,1.94s3.78-1.87,3.83-1.94l-1.66-1.12s-.42.57-1.16.87c.03-.92.22-1.79.57-2.59,2.54.7,4.42,3.02,4.42,5.78Z"></path>
                    </svg>
                    <div className="text-2xl w-5 group-hover:text-white">

                        UI/UX Designer
                    </div>
                </div>
            </div>

        </section>
    )


}

export default Expertise;