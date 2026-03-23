type ChannelCard = {
  number: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  metricLabel: string;
  metricValue: string;
};

export type PromoteDistributionChannelsSectionProps = {
  accentColor: string;
  eyebrow: string;
  headingHtml: string;
  introText: string;
  cards: ChannelCard[];
};

export default function PromoteDistributionChannelsSection({
  accentColor,
  eyebrow,
  headingHtml,
  introText,
  cards,
}: PromoteDistributionChannelsSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
          <div>
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase" style={{ color: accentColor }}>
              {eyebrow}
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl font-black leading-tight text-[#111111]">
              <span dangerouslySetInnerHTML={{ __html: headingHtml }} />
            </h2>
          </div>
          <p className="text-[#666666] text-base leading-relaxed md:pt-10">{introText}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#e4e4e4] rounded-2xl overflow-hidden">
          {cards.map((card, index) => {
            return (
              <article
                key={`${card.number}-${card.title}`}
                className={`group p-6 sm:p-7 border-[#e4e4e4] transition-all duration-300 ${index % 3 !== 2 ? 'lg:border-r' : ''} ${index < 3 ? 'border-b' : ''} ${index % 2 === 0 ? 'md:border-r md:lg:border-r' : 'md:border-r-0 md:lg:border-r'} bg-[#f7f7f6] text-[#111111] hover:bg-[#080808]`}
              >
                <p className="text-xs font-bold tracking-wide text-[#999] group-hover:text-white/60 transition-colors">{card.number}</p>
                <div className="mt-3 w-8 h-8 rounded-md flex items-center justify-center transition-colors" style={{ backgroundColor: `${accentColor}1A` }}>
                  <i className={`${card.icon} transition-colors group-hover:text-[#ffcf57]`} style={{ color: accentColor }}></i>
                </div>
                <h3 className="mt-4 text-2xl !font-bold font-black leading-tight text-[#111111] group-hover:text-white transition-colors">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#666666] group-hover:text-white/70 transition-colors">{card.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full border bg-white border-[#e5e5e5] text-[#777] group-hover:bg-white/10 group-hover:border-white/15 group-hover:text-white/85 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#777] group-hover:text-white/60 transition-colors">{card.metricLabel}</span>
                    <span className="font-semibold" style={{ color: accentColor }}>{card.metricValue}</span>
                  </div>
                  <div className="h-1 rounded-full bg-[#e5e5e5] group-hover:bg-white/15 transition-colors">
                    <div className="h-full rounded-full" style={{ width: card.metricValue, backgroundColor: accentColor }}></div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
