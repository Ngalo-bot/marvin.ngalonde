import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";

const GlassProfileIcon = () => {
  return (
    <FadeIn delay={100} className="flex-shrink-0">
      <div className="relative w-[10em] h-[10em] [perspective:24em] [transform-style:preserve-3d] group">
        {/* Glass shadow layer */}
        <div 
          className="absolute top-0 left-0 w-full h-full rounded-[1.25em] transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:rotate-[25deg] group-hover:translate3d(-0.5em,-0.5em,0.5em)"
          style={{
            background: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%)",
            boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)"
          }}
        ></div>

        {/* Glass profile container */}
        <div 
          className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] flex items-center justify-center backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] group-hover:translateZ(2em)"
          style={{
            boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset"
          }}
        >
          {/* Profile image with circular mask */}
          <div className="relative w-[7em] h-[7em] rounded-full overflow-hidden border-2 border-white/30">
            <Image
              src="/me.jpeg"
              alt="Marvin Ngalonde"
              fill
              className="object-cover"
              style={{ transformStyle: 'preserve-3d' }}
            />
          </div>
          
          {/* Sparkles decoration */}
          <Sparkles className="absolute top-2 left-2 w-6 h-6 text-yellow-400 animate-pulse" />
        </div>

        {/* Hover label */}
        <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover:opacity-100 group-hover:translate-y-4">
          View Profile
        </span>
      </div>
    </FadeIn>
  );
};

export default GlassProfileIcon;