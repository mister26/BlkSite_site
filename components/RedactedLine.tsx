import { cn } from "@/lib/utils";

type RedactedLineProps = {
  widthClass?: string;
  heightClass?: string;
  className?: string;
  copyText?: string;
};

export function RedactedLine({
  widthClass = "w-full",
  heightClass = "h-4",
  className,
  copyText,
}: RedactedLineProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "redaction-shimmer relative inline-block rounded-sm align-middle",
        widthClass,
        heightClass,
        className,
      )}
    >
      {copyText ? (
        <span className="absolute inset-0 select-text overflow-hidden text-[8px] leading-none text-transparent">
          {copyText}
        </span>
      ) : null}
    </span>
  );
}
