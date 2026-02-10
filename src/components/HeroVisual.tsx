import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
  ReactIcon,
  TypeScriptIcon,
  VueIcon,
  NextjsIcon,
  NuxtIcon,
  AstroIcon,
  NodejsIcon,
  TailwindIcon,
  SupabaseIcon,
  OpenAIIcon,
  AnthropicIcon,
  VercelIcon,
} from "./TechIcons";

export default function HeroVisual() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      {/* Center element */}
      <div className="z-10 flex size-16 items-center justify-center rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-lg">
        <span className="text-2xl font-bold text-primary font-mono">&lt;/&gt;</span>
      </div>

      {/* Inner orbit: React, TypeScript, Vue */}
      <OrbitingCircles className="size-10 border-none bg-transparent" duration={20} delay={0} radius={80}>
        <ReactIcon className="size-6 text-foreground/80" />
      </OrbitingCircles>
      <OrbitingCircles className="size-10 border-none bg-transparent" duration={20} delay={7} radius={80}>
        <TypeScriptIcon className="size-6 text-foreground/80" />
      </OrbitingCircles>
      <OrbitingCircles className="size-10 border-none bg-transparent" duration={20} delay={14} radius={80}>
        <VueIcon className="size-6 text-foreground/80" />
      </OrbitingCircles>

      {/* Middle orbit: Next.js, Nuxt, Astro, Node.js */}
      <OrbitingCircles className="size-11 border-none bg-transparent" duration={30} delay={0} radius={140}>
        <NextjsIcon className="size-6 text-foreground/70" />
      </OrbitingCircles>
      <OrbitingCircles className="size-11 border-none bg-transparent" duration={30} delay={7} radius={140}>
        <NuxtIcon className="size-6 text-foreground/70" />
      </OrbitingCircles>
      <OrbitingCircles className="size-11 border-none bg-transparent" duration={30} delay={15} radius={140}>
        <AstroIcon className="size-6 text-foreground/70" />
      </OrbitingCircles>
      <OrbitingCircles className="size-11 border-none bg-transparent" duration={30} delay={22} radius={140}>
        <NodejsIcon className="size-6 text-foreground/70" />
      </OrbitingCircles>

      {/* Outer orbit (reverse): Tailwind, Supabase, OpenAI, Anthropic, Vercel */}
      <OrbitingCircles className="size-12 border-none bg-transparent" duration={40} delay={0} radius={200} reverse>
        <TailwindIcon className="size-7 text-foreground/60" />
      </OrbitingCircles>
      <OrbitingCircles className="size-12 border-none bg-transparent" duration={40} delay={8} radius={200} reverse>
        <SupabaseIcon className="size-7 text-foreground/60" />
      </OrbitingCircles>
      <OrbitingCircles className="size-12 border-none bg-transparent" duration={40} delay={16} radius={200} reverse>
        <OpenAIIcon className="size-7 text-foreground/60" />
      </OrbitingCircles>
      <OrbitingCircles className="size-12 border-none bg-transparent" duration={40} delay={24} radius={200} reverse>
        <AnthropicIcon className="size-7 text-foreground/60" />
      </OrbitingCircles>
      <OrbitingCircles className="size-12 border-none bg-transparent" duration={40} delay={32} radius={200} reverse>
        <VercelIcon className="size-7 text-foreground/60" />
      </OrbitingCircles>
    </div>
  );
}
