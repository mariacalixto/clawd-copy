// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-12 md:p-24 lg:p-50">
  <div className="text-center space-y-6 max-w-4xl">
    {/* Versão animada */}
    <h1 className="bbh-hegarty-regular tracking-tight text-7xl gradient-text">
      Moltbot
    </h1>
        
        <p className="font-medium tracking-widest text-xl scale-y-80 tracking-[0.2em] text-[#ff4d4d]">
      THE AI THAT ACTUALLY DOES THINGS.
        </p>
        
        <p className="text-base font-light leading-loose text-[#8892b0]">
Clears your inbox, sends emails, manages your calendar, checks you in for flights.<br/>
All from WhatsApp, Telegram, or any chat app you already use.
        </p>
        
        {/* Botão estilo Moltbot */}
        <div className="pt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 
                           text-white font-semibold rounded-lg hover:opacity-90 
                           transition-all duration-200">
            Get Started
          </button>
        </div>
        
        
      </div>
    </div>
  );
}