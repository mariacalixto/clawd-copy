"use client"
import Lottie from "lottie-react";
import Owl from "@/assets/lottie/Owl.json";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Marquee } from "./components/marquee";


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

<div className="relative w-full overflow-hidden">
  {/* Gradientes nas bordas */}
  <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
  <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
  
  {/* Primeira linha - Move para ESQUERDA */}
  <div className="flex overflow-hidden">
    <div className="flex flex-none py-6 animate-marquee gap-4">
      {/* Card 1 */}
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Descrição ou texto que você quiser escrever aqui dentro.</p>
      </div>
      
      {/* Card 2 */}
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Alta performance e velocidade máxima.</p>
      </div>
      
      {/* Card 3 */}
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Proteção total dos seus dados.</p>
      </div>
      
      {/* Card 4 */}
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Conecta com todas as ferramentas.</p>
      </div>
      
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <p className="text-gray-400 text-sm">Descrição ou texto que você quiser escrever aqui dentro.</p>
      </div>
      
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Alta performance e velocidade máxima.</p>
      </div>
      
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Proteção total dos seus dados.</p>
      </div>
      
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Conecta com todas as ferramentas.</p>
      </div>
    </div>
  </div>

  {/* Segunda linha - Move para DIREITA (invertida) */}
  <div className="flex overflow-hidden">
    <div className="flex flex-none py-1 animate-marquee-reverse gap-4">
      {/* Cards na ordem invertida */}
        <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Descrição ou texto que você quiser escrever aqui dentro.</p>
      </div>
      
      {/* Card 2 */}
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Alta performance e velocidade máxima.</p>
      </div>
      
      {/* Card 3 */}
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Proteção total dos seus dados.</p>
      </div>
      
      {/* Card 4 */}
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Conecta com todas as ferramentas.</p>
      </div>
      
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <p className="text-gray-400 text-sm">Descrição ou texto que você quiser escrever aqui dentro.</p>
      </div>
      
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Alta performance e velocidade máxima.</p>
      </div>
      
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Proteção total dos seus dados.</p>
      </div>
      
      <div className="flex-none w-90 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
        <p className="text-gray-400 text-sm">Conecta com todas as ferramentas.</p>
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  );
}