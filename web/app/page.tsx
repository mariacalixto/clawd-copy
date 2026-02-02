"use client"
import Lottie from "lottie-react";
import Owl from "@/assets/lottie/Owl.json";
import { ArrowRight, ChevronRight } from "lucide-react";
import Marquee from "./components/marquee"
import Snippet from "./components/snippet"
import Wid from "./components/wid"

// app/page.tsx

export default function Home() {
  return (
    <div className="relative z-10 max-w-[860px] mx-auto flex flex-col">
       <Lottie className="w-64 h-55 mx-auto" animationData={Owl}/>
      <div className="text-center space-y-6">

        
        <h1 className="bbh-hegarty-regular tracking-tight text-6xl gradient-text">
          OpenClaw
        </h1>
        
        <p className="font-medium tracking-widest text-xl scale-y-80 tracking-[0.2em] text-[#ff4d4d]">
          THE AI THAT ACTUALLY DOES THINGS.
        </p>
        
        <p className="text-base font-light leading-loose text-[#8892b0]">
          Clears your inbox, sends emails, manages your calendar, checks you in for flights.<br/>
          All from WhatsApp, Telegram, or any chat app you already use.
        </p>
        
<div className="mt-12 flex flex-row justify-between items-center px-4">
    <div className="flex items-center ">
  <ChevronRight className="text-[#ff4d4d]" size={36} strokeWidth={1.75} />
  <h1 className="special-gothic-expanded-one-regular text-xl">
    What People Say
  </h1>
</div>
    <div className="group flex items-center gap-1 cursor-pointer">
        <h2 className="font-normal text-[#ff4d4d] group-hover:text-[#14b8a6] transition-colors duration-300">
            View all
        </h2>
        <ArrowRight className="text-[#ff4d4d] group-hover:text-[#14b8a6] transition-colors duration-300" strokeWidth={1.5} />
    </div>
    
</div>

      

      <div>
        <Marquee />
      </div>

    <div className="mt-12 flex flex-row justify-between items-center px-4">
    <div className="flex items-center ">
  <ChevronRight className="text-[#ff4d4d]" size={36} strokeWidth={1.75} />
  <h1 className="special-gothic-expanded-one-regular text-xl">
    Quick Start
  </h1>
</div>
</div>


    <div>
      <Snippet />
    </div>
    
        <p className="text-sm text-base font-extralight leading-loose text-[#8892b0]">
          Works on macOS, Windows & Linux. The one-liner installs Node.js and everything else for you.
        </p>

         <div className="mt-12 flex flex-row justify-between items-center px-4">
    <div className="flex items-center ">
  <ChevronRight className="text-[#ff4d4d]" size={36} strokeWidth={1.75} />
  <h1 className="special-gothic-expanded-one-regular text-xl">
    What It Does
  </h1>
</div>
</div>

<main className="px-6">
  <div className="max-w-7xl mx-auto">
    <Wid />
  </div>
</main>

         <div className="mt-12 flex flex-row justify-between items-center px-4">
    <div className="flex items-center ">
  <ChevronRight className="text-[#ff4d4d]" size={36} strokeWidth={1.75} />
  <h1 className="special-gothic-expanded-one-regular text-xl">
    Works With Everything
  </h1>
</div>
</div>


      </div>
    </div>
  );
}