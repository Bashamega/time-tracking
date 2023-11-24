"use client"
import Info from "@/components/PersonalInfo";
import Card from "@/components/card";
import React, {useState} from "react";
const data = require('../data/data.json')
export default function Home(){
  const [type, settype] = useState<string>('Daily')
  return(
    <main className="flex flex-col lg:flex-row items-center justify-center lg:h-screen space-y-5 lg:space-y-0">
      <section className=" w-11/12 lg:w-2/12 bg-[#1D204B] rounded-md lg:mr-5 mt-5 lg:mt-0">
        <Info></Info>
        <div className="p-5 flex  space-x-10 lg:space-x-0 justify-center lg:block">
          <button className={type =="Daily"?(''):(" text-slate-500 hover:text-white cursor-pointer")} onClick={()=>{settype('Daily')}}>
            Daily
          </button><br></br>
          <button className={type =="Weekly"?(''):(" text-slate-500 hover:text-white cursor-pointer")} onClick={()=>{settype('Weekly')}}>
            Weekly
          </button><br></br>
          <button className={type =="Monthly"?(''):(" text-slate-500 hover:text-white cursor-pointer")} onClick={()=>{settype('Monthly')}}>
            Monthly
          </button>
        </div>
        
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5  lg:w-auto">
        {data.map((set: { title: string, image : string, bg:string, timeframes: {
          daily : {
            current: number,
            previous: number
          },
          weekly : {
            current: number,
            previous: number
          },
          monthly : {
            current: number,
            previous: number
          }
        }}) => (
          <Card
            bg={set.bg}
            title={set.title}
            banner={set.image}
            prev={
              type === 'Daily'
                ? set.timeframes.daily.previous
                : type === 'Monthly'
                ? set.timeframes.monthly.previous
                : set.timeframes.weekly.previous
            }
            current={
              type === 'Daily'
                ? set.timeframes.daily.current
                : type === 'Monthly'
                ? set.timeframes.monthly.current
                : set.timeframes.weekly.current
            }
          ></Card>

        ))}
      </section>
    </main>
  )
}

