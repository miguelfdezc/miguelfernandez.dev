import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

interface HeroTranslations {
  badge: string;
  subtitle: string;
  description: string;
  cta: string;
  cv: string;
}

interface Props {
  translations?: HeroTranslations;
  cvUrl?: string;
}

const defaults: HeroTranslations = {
  badge: "Available for work",
  subtitle: "Senior frontend developer & AI engineer building products that ship.",
  description: "4+ years shipping SaaS apps, Chrome extensions, and client websites. CS degree & Master\u2019s in AI Development.",
  cta: "Get in touch",
  cv: "Download CV",
};

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function AnimatedHero({ translations, cvUrl }: Props) {
  const t = { ...defaults, ...translations };

  return (
    <div className="max-w-3xl">
      <motion.div {...fade(0)}>
        <AnimatedGradientText className="mb-4 !mx-0">
          <span className="relative flex h-1.5 w-1.5 mr-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
          </span>
          <span className="text-xs font-medium text-foreground/80">
            {t.badge}
          </span>
        </AnimatedGradientText>
      </motion.div>

      <motion.h1
        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
        {...fade(0.1)}
      >
        Miguel
        <br />
        Fern&aacute;ndez
      </motion.h1>

      <motion.p
        className="mt-5 text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl"
        {...fade(0.2)}
      >
        {t.subtitle}
      </motion.p>

      <motion.p
        className="mt-3 text-sm text-muted-foreground/70 max-w-lg"
        {...fade(0.3)}
      >
        {t.description}
      </motion.p>

      <motion.div className="flex items-center gap-3 mt-6 flex-wrap" {...fade(0.4)}>
        <a href="mailto:miguel@miguelfernandez.dev">
          <ShimmerButton
            shimmerColor="hsl(180 50% 70%)"
            background="oklch(0.72 0.12 180)"
            borderRadius="8px"
            shimmerSize="0.05em"
            className="h-7 px-3 text-sm font-medium text-white"
          >
            {t.cta}
          </ShimmerButton>
        </a>
        {cvUrl && (
          <Button asChild variant="outline" size="sm" className="gap-1.5">
            <a href={cvUrl} download>
              <svg className="size-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M12 17v-6" />
                <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
              </svg>
              {t.cv}
            </a>
          </Button>
        )}
        <Button asChild variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
          <a
            href="https://github.com/miguelfdezc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </Button>
        <Button asChild variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
          <a
            href="https://www.linkedin.com/in/miguelfernandezdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
