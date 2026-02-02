export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradientes */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

      {/* Primeira linha - ESQUERDA */}
      <div className="overflow-hidden">
        <div className="flex w-max py-6 animate-marquee gap-4">
          {cards.map((card, i) => (
            <Card key={`top-a-${i}`} {...card} />
          ))}
          {cards.map((card, i) => (
            <Card key={`top-b-${i}`} {...card} />
          ))}
        </div>
      </div>

      {/* Segunda linha - DIREITA */}
      <div className="overflow">
        <div className="flex w-max py-1 animate-marquee-reverse gap-4">
          {cards.map((card, i) => (
            <Card key={`bottom-a-${i}`} {...card} />
          ))}
          {cards.map((card, i) => (
            <Card key={`bottom-b-${i}`} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Card({
  text,
  user,
  avatar,
}: {
  text: string
  user: string
  avatar: string
}) {
  return (
    <div className="flex-none w-90 h-32 bg-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#ff4d4d] hover:shadow-[0_0_25px_rgba(245,19,19,0.45)]">

      {/* Conteúdo */}
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <img
          src={avatar}
          alt={user}
          className="h-8 w-8 rounded-full object-cover border border-white/20 mt-1"
        />

        {/* Texto + user */}
        <div className="text-left flex flex-col gap-2">
          <p className="text-gray-400 text-sm leading-snug">
            {text}
          </p>

          <span className="font-semibold text-sm text-[#ff4d4d]">
            {user}
          </span>
        </div>
      </div>
    </div>
  )
}

const cards = [
  {
    text: "OpenClaw is a game changer. The potential for custom extensions is huge, and AI really speeds up the process.",
    user: "@Senator_NFTs",
    avatar: "/avatars/senator.png",
  },
  {
    text: "Alta performance e velocidade máxima.",
    user: "@crypto.dev",
    avatar: "/avatars/crypto.png",
  },
  {
    text: "Proteção total dos seus dados.",
    user: "@builder.eth",
    avatar: "/avatars/builder.png",
  },
  {
    text: "Conecta com todas as ferramentas.",
    user: "@openclaw",
    avatar: "/avatars/openclaw.png",
  },
]
