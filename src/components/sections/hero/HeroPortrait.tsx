export function HeroPortrait() {
  return (
    <div className="relative aspect-[4/5] w-[min(380px,70vw)]">
      {/* Glow layer behind */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -inset-4 rounded-[2rem]
                   bg-gradient-to-br from-accent/20 to-accent-2/10
                   blur-2xl"
      />
      {/* Portrait frame */}
      <div className="noise relative h-full w-full overflow-hidden
                      rounded-[2rem] border border-border-strong
                      shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
        <img
          src="/wuan.png"
          alt="Văn Anh Quân — portrait"
          width={760}
          height={950}
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3
                     bg-gradient-to-t from-bg/80 to-transparent"
        />
      </div>
    </div>
  );
}
