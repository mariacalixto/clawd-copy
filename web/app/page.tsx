// app/page.tsx
export default function Home() {
  return (
    <div className="relative z-10 max-w-[860px] mx-auto min-h-screen flex flex-col 
                pt-[200px] pb-[40px] px-6">
      <div className="text-center space-y-6 max-w-4xl mt-12"> {/* Adicionado mt-12 */}
        
        {/* Versão animada */}
        <h1 className="bbh-hegarty-regular tracking-tight text-6xl gradient-text pt-[20px]">
          Moltbot
        </h1>
        
        <p className="font-medium tracking-widest text-xl scale-y-80 tracking-[0.2em] text-[#ff4d4d]">
          THE AI THAT ACTUALLY DOES THINGS.
        </p>
        
        <p className="text-base font-light leading-loose text-[#8892b0]">
          Clears your inbox, sends emails, manages your calendar, checks you in for flights.<br/>
          All from WhatsApp, Telegram, or any chat app you already use.
        </p>

        <h1 className="text-left special-gothic-expanded-one-regular text-xl">
          ⟩ What People Say
        </h1>
      </div>
    </div>
  );
}