import { cn } from "@/lib/utils";

type SectionLabelProps = {
  eyebrow?: string;
  title: string;
  className?: string;
};

export function SectionLabel({ eyebrow, title, className }: SectionLabelProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase text-blacksite-redSoft/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-blacksite-text sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
