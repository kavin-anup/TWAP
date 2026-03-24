type PromoteFinalCtaSectionProps = {
  accentColor: string;
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  buttonText: string;
  points: string[];
};

export default function PromoteFinalCtaSection({
  accentColor,
  eyebrow,
  headingPrefix,
  headingHighlight,
  description,
  buttonText,
  points,
}: PromoteFinalCtaSectionProps) {
  return (
    <section className="bg-[#050608] px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative px-6 sm:px-10 py-16 sm:py-28 text-center"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background: `radial-gradient(circle at center, ${accentColor}42 0%, transparent 58%)`,
            }}
          />
          <div className="relative">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase" style={{ color: accentColor }}>
              {eyebrow}
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl font-black leading-tight text-white">
              {headingPrefix} <span style={{ color: accentColor }}>{headingHighlight}</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/65 text-sm sm:text-base leading-relaxed">{description}</p>

            <a
              href="#promote-submit-form"
              className="inline-flex mt-8 rounded-full px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: accentColor }}
            >
              {buttonText}
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-white/55">
              {points.map((point) => (
                <span key={point}>✓ {point}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
