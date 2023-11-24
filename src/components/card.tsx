import React from "react";
import Image from "next/image";
interface props {
    title:string,
    banner: string,
    current: number,
    prev: number,
    bg: string,
}
export default function Card({title, banner, current, prev, bg} : props){
    return(
        <div className=" w-[200px]  rounded-lg relative ">
            <section
                className={`rounded-lg w-[200px] relative z-10 h-[50px]`}
                style={{ backgroundColor: bg}} /* Set a positive z-index value */
            >
                <Image
                alt={title}
                width={50}
                height={0}
                src={banner}
                className="ml-[150px]"
                />
            </section>
            <section className="p-5 mt-[-10%] bg-[#1D204B] hover:bg-[#373c8a]  rounded-lg z-20 relative">
               <nav className="flex items-center relative mb-5">
                <h1 className=" text-lg">{title}</h1>
                <div className=" space-x-1 absolute right-0 cursor-pointer">
                    <span className="w-2 h-2 bg-slate-200 rounded-full inline-block"></span>
                    <span className="w-2 h-2 bg-slate-200 rounded-full inline-block"></span>
                    <span className="w-2 h-2 bg-slate-200 rounded-full inline-block"></span>

                </div>
               </nav> 
               <h2 className=" text-5xl font-normal">{current + "hrs"}</h2>
               <p className=" text-slate-500">Last Week - {prev + "hrs"}</p>
            </section>
        </div>
    )
}