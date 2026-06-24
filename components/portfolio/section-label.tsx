export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      <span className="text-sm leading-none">•</span>
      <span>{children}</span>
      <span className="text-sm leading-none">•</span>
    </div>
  )
}
