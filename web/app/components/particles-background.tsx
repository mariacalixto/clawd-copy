// app/components/css-stars-background.tsx
export default function CssStarsBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
      {/* Estrelas grandes */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => {
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 100}%`;
          const size = Math.random() * 2 + 1;
          const opacity = Math.random() * 0.6 + 0.4;
          const delay = Math.random() * 3;
          
          // Cores Moltbot atualizadas
          const colors = [
            "rgba(0, 229, 204",    // --cyan-bright: #00e5cc
            "rgba(20, 184, 166",   // --cyan-mid: #14b8a6
            "rgba(255, 77, 77",    // --coral-bright: #ff4d4d
            "rgba(230, 57, 70",    // --coral-mid: #e63946
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <div
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                left,
                top,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: `${color}, ${opacity})`,
                boxShadow: `0 0 ${size * 3}px ${size * 2}px ${color}, 0.2)`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
      
      {/* (pontos pequenos) */}
      <div className="absolute inset-0">
        {Array.from({ length: 200 }).map((_, i) => {
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 100}%`;
          const size = Math.random() * 0.8 + 0.2;
          const opacity = Math.random() * 0.5 + 0.2;
          
          //versões mais sutis
          const colors = [
            "rgba(0, 229, 204",    // --cyan-bright: #00e5cc (mais transparente)
            "rgba(20, 184, 166",   // --cyan-mid: #14b8a6
            "rgba(255, 77, 77",    // --coral-bright: #ff4d4d
            "rgba(230, 57, 70",    // --coral-mid: #e63946
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <div
              key={`small-${i}`}
              className="absolute rounded-full"
              style={{
                left,
                top,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: `${color}, ${opacity})`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}