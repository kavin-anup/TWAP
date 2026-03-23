type HowItWorksStep = {
  number: string;
  title: string;
  description: string;
};

export type PromoteHowItWorksSectionProps = {
  accentColor: string;
  eyebrow: string;
  headingHtml: string;
  introText: string;
  steps: HowItWorksStep[];
};

export default function PromoteHowItWorksSection({
  accentColor,
  eyebrow,
  headingHtml,
  introText,
  steps,
}: PromoteHowItWorksSectionProps) {
  return (
    <section className="bg-[#07090c] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase" style={{ color: accentColor }}>
            {eyebrow}
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black leading-tight text-white">
            <span dangerouslySetInnerHTML={{ __html: headingHtml }} />
          </h2>
          <p className="mt-5 text-white/60 text-sm sm:text-base leading-relaxed">{introText}</p>
        </div>

        <div className="mt-10 relative">
          <div className="hidden md:block absolute left-0 right-0 top-5 h-px bg-white/10"></div>
          <div className="hidden md:block absolute left-0 top-5 h-px" style={{ width: '100%', backgroundColor: `${accentColor}66` }}></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, idx) => (
              <article key={`${step.number}-${step.title}`} className="text-center relative">
                <div
                  className="w-10 h-10 rounded-full mx-auto border border-white/10 bg-[#1d2128] text-sm font-bold flex items-center justify-center"
                  style={{ color: accentColor }}
                >
                  {step.number}
                </div>
                <h3 className="mt-4 text-2xl font-black !font-bold text-white leading-tight">{step.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/55">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
