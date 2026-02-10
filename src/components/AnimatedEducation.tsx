import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { EducationEntry } from "@/i18n/data/experience";

interface Props {
  education: EducationEntry[];
  connectorText?: string;
}

export default function AnimatedEducation({ education, connectorText = "at" }: Props) {
  return (
    <div className="relative pl-6">
      {/* Timeline line */}
      <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border" />

      <div className="space-y-2">
        {education.map((entry, index) => (
          <motion.div
            key={entry.institution + entry.date}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{
              duration: 0.35,
              delay: index * 0.06,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-6 top-4 w-[9px] h-[9px] rounded-full border-2 border-primary bg-background" />

            <Card className="p-3 sm:p-4 border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20 transition-colors group">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                <div className="sm:w-28 shrink-0">
                  <span className="text-xs text-muted-foreground font-[var(--font-geist-mono)]">
                    {entry.date}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="font-medium text-foreground text-sm">
                      {entry.title}
                    </h3>
                    <span className="text-muted-foreground text-xs">{connectorText}</span>
                    <span className="text-primary text-sm font-medium">
                      {entry.institution}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {entry.description}
                  </p>
                  {entry.link && (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary/70 hover:text-primary transition-colors mt-2"
                    >
                      <svg className="size-3" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                        <path d="M11 13l9 -9" />
                        <path d="M15 4h5v5" />
                      </svg>
                      {new URL(entry.link).hostname}
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
