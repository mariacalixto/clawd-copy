"use client"
import Lottie from "lottie-react";
import Owl from "@/assets/lottie/Owl.json";
import { ArrowRight } from "lucide-react";
// app/page.tsx

export default function Home() {
  return (
    <div className="relative z-10 max-w-[860px] mx-auto flex flex-col">
       <Lottie className="w-64 h-55 mx-auto" animationData={Owl}/>
      <div className="text-center space-y-6">

        
        <h1 className="bbh-hegarty-regular tracking-tight text-6xl gradient-text">
          Moltbot
        </h1>
        
        <p className="font-medium tracking-widest text-xl scale-y-80 tracking-[0.2em] text-[#ff4d4d]">
          THE AI THAT ACTUALLY DOES THINGS.
        </p>
        
        <p className="text-base font-light leading-loose text-[#8892b0]">
          Clears your inbox, sends emails, manages your calendar, checks you in for flights.<br/>
          All from WhatsApp, Telegram, or any chat app you already use.
        </p>
<div className="mt-12 flex flex-row justify-between items-center px-4">
    <h1 className="text-left special-gothic-expanded-one-regular text-xl">
          ⟩ What People Say
        </h1> 
        <div className="flex"><h2 className="font-normal mr-2 text-[#f51313]">View all</h2><ArrowRight className="text-[#f51313]" strokeWidth={1.5} /></div>
        
</div>
      </div>
    </div>
  );
}