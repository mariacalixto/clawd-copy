import {
  Home,
  MessageCircle,
  Brain,
  Globe,
  Terminal,
  Puzzle,
} from "lucide-react"

export default function Wid() {
  return (
    <section className="w-full">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Feature
          icon={<Home />}
          title="Runs on Your Machine"
          desc="macOS, Windows, or Linux. Anthropic, OpenAI, or local models. Private by default—your data stays yours."
        />

        <Feature
          icon={<MessageCircle />}
          title="Any Chat App"
          desc="Talk to it on WhatsApp, Telegram, Discord, Slack, Signal, or iMessage. Works in DMs and group chats."
        />

        <Feature
          icon={<Brain />}
          title="Persistent Memory"
          desc="Remembers you and becomes uniquely yours. Your preferences, your context, your AI."
        />

        <Feature
          icon={<Globe />}
          title="Browser Control"
          desc="It can browse the web, fill forms, and extract data from any site."
        />

        <Feature
          icon={<Terminal />}
          title="Full System Access"
          desc="Read and write files, run shell commands, execute scripts. Full access or sandboxed—your choice."
        />

        <Feature
          icon={<Puzzle />}
          title="Skills & Plugins"
          desc="Extend with community skills or build your own. It can even write its own."
        />
      </div>
    </section>
  )
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm p-4 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#ff4d4d] hover:shadow-[0_0_25px_rgba(245,19,19,0.45)]">
      
      {/* Icon */}
      <div className="mb-4 h-10 flex items-center justify-center text-[#ff4d4d]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-white text-sm text-left special-gothic-expanded-one-regular font-medium mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className=" text-left text-sm font-extralight text-gray-400 leading-relaxed">
        {desc}
      </p>
    </div>
  )
}
