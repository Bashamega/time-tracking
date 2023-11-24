import React from "react";
import Image from "next/image";
export default function Info(){
    return(
        <section className=" w-[100%] space-y-5 rounded bg-[#5746EB] p-10 flex space-x-5 lg:block">
            <Image src='/image-jeremy.png' alt="pfp" width={100} height={0} className=" border-4 rounded-full"></Image>
            <div>
                <p className=" text-slate-400">Report for</p>
                <h1 className=" text-2xl lg:text-3xl">Jeremy  Robson</h1>
            </div>
            
        </section>
    )
}