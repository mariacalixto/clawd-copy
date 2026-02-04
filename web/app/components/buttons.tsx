import {
  MessageCircle,
  Send,
  Disc,
  Slack,
  Shield,
  Music,
  Sun,
  Book,
  Twitter,
  Globe,
  Mail,
  Github,
} from "lucide-react"

export default function ButtonsGrid() {
  return (
    <div className="grid grid-cols-4 gap-3 max-w-xl">
      <Btn icon={<MessageCircle size={16} />} label="WhatsApp" />
      <Btn icon={<Send size={16} />} label="Telegram" />
      <Btn icon={<Disc size={16} />} label="Discord" />
      <Btn icon={<Slack size={16} />} label="Slack" />

      <Btn icon={<Shield size={16} />} label="Signal" />
      <Btn icon={<MessageCircle size={16} />} label="iMessage" />
      <Btn icon={<MessageCircle size={16} />} label="Claude" />
      <Btn icon={<MessageCircle size={16} />} label="GPT" />

      <Btn icon={<Music size={16} />} label="Spotify" />
      <Btn icon={<Sun size={16} />} label="Hue" />
      <Btn icon={<Book size={16} />} label="Obsidian" />
      <Btn icon={<Twitter size={16} />} label="Twitter" />

      <Btn icon={<Globe size={16} />} label="Browser" />
      <Btn icon={<Mail size={16} />} label="Gmail" />
      <Btn icon={<Github size={16} />} label="GitHub" />
    </div>
  )
}

function Btn({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div
      className="
        flex items-center gap-2
        px-3 py-2
        rounded-xl
        border border-white/10
        bg-white/2 backdrop-blur-sm
        text-xs text-gray-300
        transition-all duration-200
        hover:border-[#ff4d4d]
        hover:text-white
        hover:shadow-[0_0_12px_rgba(245,19,19,0.35)]
      "
    >
      <span className="text-[#ff4d4d]">{icon}</span>
      {label}
    </div>
  )
}
