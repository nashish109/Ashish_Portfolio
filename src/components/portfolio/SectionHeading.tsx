import { Reveal } from "@/components/portfolio/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => (
  <Reveal
    className={cn(
      "mb-12 max-w-4xl",
      align === "center" && "mx-auto text-center",
    )}
  >
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.32em] text-white/45">
      {eyebrow}
    </p>
    <h2 className="font-display text-4xl font-semibold leading-none text-white sm:text-5xl md:text-6xl">
      {title}
    </h2>
    {description && (
      <p className="mt-6 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
        {description}
      </p>
    )}
  </Reveal>
);
