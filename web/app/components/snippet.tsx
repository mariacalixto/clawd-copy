"use client"

import { useState } from "react"

const COMMANDS = {
  powershell: "iwr -useb https://openclaw.ai/install.ps1 | iex",
  npm: "npm install @openclaw/sdk",
  macos: "curl -fsSL https://openclaw.ai/install.sh | sh",
}

type Tab = keyof typeof COMMANDS

export default function Snippet() {
  const [active, setActive] = useState<Tab>("powershell")

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Glow */}
      <div className="absolute -inset-0.5 rounded-2xl bg-[#ff4d4d]/20 blur-2xl opacity-70" />

      <div className="relative rounded-2xl border border-white/10 bg-[#0b0f1a] overflow-hidden">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="flex gap-2 ml-3">
              <TabButton active={active} id="powershell" onClick={setActive}>
                PowerShell
              </TabButton>
              <TabButton active={active} id="npm" onClick={setActive}>
                npm
              </TabButton>
              <TabButton active={active} id="macos" onClick={setActive}>
                macOS
              </TabButton>
            </div>
          </div>

          {/* RIGHT */}
          <span className="text-xs text-gray-500">BETA</span>
        </div>

        {/* BODY */}
        <div className="relative px-6 py-6 font-mono text-sm text-gray-200">
          
          <p className="text-gray-400 mb-3 italic">
            # Works everywhere. Installs everything. You're welcome. 🚀
          </p>

          <div className="flex items-center justify-between gap-4">
            <code className="whitespace-nowrap overflow-x-auto">
              <span className="text-red-400">$</span>{" "}
              {COMMANDS[active]}
            </code>

            <button
              onClick={() => navigator.clipboard.writeText(COMMANDS[active])}
              className="text-gray-400 hover:text-white transition"
            >
              ⧉
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function TabButton({
  id,
  active,
  onClick,
  children,
}: {
  id: Tab
  active: Tab
  onClick: (id: Tab) => void
  children: React.ReactNode
}) {
  const isActive = active === id

  return (
    <button
      onClick={() => onClick(id)}
      className={`px-3 py-1 rounded-md text-xs font-medium transition ${
        isActive
          ? "bg-[#ff4d4d] text-black"
          : "bg-white/5 text-gray-400 hover:text-white"
      }`}
    >
      {children}
    </button>
  )
}

