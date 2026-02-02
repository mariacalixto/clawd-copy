export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradientes nas bordas */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

      {/* Primeira linha - ESQUERDA */}
      <div className="overflow-hidden">
        <div className="flex w-max py-6 animate-marquee gap-4">
          {cards.map((text, i) => (
            <Card key={`top-a-${i}`} text={text} />
          ))}
          {cards.map((text, i) => (
            <Card key={`top-b-${i}`} text={text} />
          ))}
        </div>
      </div>

      {/* Segunda linha - DIREITA */}
      <div className="overflow">
        <div className="flex w-max py-1 animate-marquee-reverse gap-4">
          {cards.map((text, i) => (
            <Card key={`bottom-a-${i}`} text={text} />
          ))}
          {cards.map((text, i) => (
            <Card key={`bottom-b-${i}`} text={text} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Card({ text }: { text: string }) {
  return (
    <div className="flex-none w-90 h-32 bg-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#ff4d4d] hover:shadow-[0_0_25px_rgba(245,19,19,0.45)]">
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  )
}

const cards = [
  "Descrição ou texto que você quiser escrever aqui dentro.",
  "Alta performance e velocidade máxima.",
  "Proteção total dos seus dados.",
  "Conecta com todas as ferramentas.",
  "Descrição ou texto que você quiser escrever aqui dentro.",
  "Alta performance e velocidade máxima.",
  "Proteção total dos seus dados.",
  "Conecta com todas as ferramentas.",
]
