"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max animate-marquee items-stretch gap-[--gap]",
          {
            "[animation-direction:reverse]": reverse,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "flex-col": vertical,
          }
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex w-max animate-marquee items-stretch gap-[--gap]",
          {
            "[animation-direction:reverse]": reverse,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "flex-col": vertical,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
}