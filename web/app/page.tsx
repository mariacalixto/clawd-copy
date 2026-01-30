"use client"
import Lottie from "lottie-react";
import Owl from "@/assets/lottie/Owl.json";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Marquee } from "./components/marquee";
import { TestimonialCard, testimonials } from "./components/testimonial-card";

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
    <div className="flex items-center ">
  <ChevronRight className="text-[#f51313]" size={36} strokeWidth={1.75} />
  <h1 className="special-gothic-expanded-one-regular text-xl">
    What People Say
  </h1>
</div>
    <div className="group flex items-center gap-1 cursor-pointer">
        <h2 className="font-normal text-[#f51313] group-hover:text-[#14b8a6] transition-colors duration-300">
            View all
        </h2>
        <ArrowRight className="text-[#f51313] group-hover:text-[#14b8a6] transition-colors duration-300" strokeWidth={1.5} />
    </div>
    
</div>

 <div className="mt-6 relative overflow-hidden">
  {/* Fade na esquerda - use from-background ou from-gray-950 */}
  <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
  
  {/* Fade na direita */}
  <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
  
  <Marquee className="[--duration:40s]" pauseOnHover>
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index} {...testimonial} />
    ))}
  </Marquee>
</div>


      </div>
    </div>
  );
}