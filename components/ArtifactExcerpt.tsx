import { RedactedLine } from "@/components/RedactedLine";

const artifactRows = [
  { prompt: "$", command: "blacksite scope --target", redacted: "w-32" },
  { prompt: "$", command: "blacksite evidence add", redacted: "w-44" },
  { prompt: "$", command: "blacksite review BS-", redacted: "w-14" },
];

export function ArtifactExcerpt() {
  return (
    <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-black/35 font-mono shadow-dossier">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-[11px] uppercase text-blacksite-muted">
        <span>Artifact excerpt</span>
        <span>REF: BS-001.04</span>
      </div>
      <div className="space-y-4 p-4 text-xs text-blacksite-text sm:p-5 sm:text-sm">
        {artifactRows.map((row) => (
          <div key={row.command} className="flex flex-wrap items-center gap-2">
            <span className="text-blacksite-redSoft/80">{row.prompt}</span>
            <span>{row.command}</span>
            <RedactedLine widthClass={row.redacted} heightClass="h-3" />
          </div>
        ))}
        <div className="flex flex-wrap items-center gap-2 text-blacksite-muted">
          <RedactedLine widthClass="w-20" heightClass="h-3" />
          <span>REDACTED - 14 lines withheld</span>
          <RedactedLine widthClass="w-16" heightClass="h-3" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-blacksite-redSoft/80">$</span>
          <span>blacksite submit --to</span>
          <RedactedLine widthClass="w-36" heightClass="h-3" />
        </div>
        <div className="border-t border-white/10 pt-4 text-blacksite-muted">
          &gt; submission deferred - operator review required
        </div>
      </div>
    </div>
  );
}
