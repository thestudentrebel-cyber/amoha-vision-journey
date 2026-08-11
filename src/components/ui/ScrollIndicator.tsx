export function ScrollIndicator({ label = "Scroll to explore" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-onDark/70">
      <span className="eyebrow">{label}</span>
      <span className="relative block h-12 w-px overflow-hidden bg-onDark/25">
        <span className="absolute inset-x-0 top-0 h-4 animate-[scrollLine_2.4s_var(--ease-cine)_infinite] bg-onDark/80" />
      </span>
      <style>{`@keyframes scrollLine{0%{transform:translateY(-100%)}60%{transform:translateY(300%)}100%{transform:translateY(300%)}}`}</style>
    </div>
  );
}
