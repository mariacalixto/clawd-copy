// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          The AI that <span className="text-purple-300">actually does things</span>
        </h1>
        
        <p className="text-xl text-gray-300">
          Clears your inbox, sends emails, manages your calendar, checks you in for flights.
        </p>
        
        <p className="text-lg text-gray-400">
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
        
        {/* Card exemplo */}
        <div className="mt-12 max-w-2xl mx-auto p-6 bg-black/30 backdrop-blur-sm 
                       border border-white/10 rounded-xl">
          <p className="text-gray-300 italic">
            "Setup @moltbot yesterday. All I have to say is, wow..."
          </p>
          <p className="text-gray-400 mt-2">— @jonahships_</p>
        </div>
      </div>
    </div>
  );
}