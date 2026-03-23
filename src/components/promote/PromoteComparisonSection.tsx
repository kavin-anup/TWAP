type ComparisonRow = {
  feature: string;
  twap: string;
  directory: string;
  editorial: string;
  social: string;
  ceo: string;
};

export type PromoteComparisonSectionProps = {
  accentColor: string;
  eyebrow: string;
  headingHtml: string;
  introText: string;
  columns: {
    feature: string;
    twap: string;
    directory: string;
    editorial: string;
    social: string;
    ceo: string;
  };
  rows: ComparisonRow[];
};

const renderValue = (value: string, accentColor: string) => {
  if (value === 'yes') return <span style={{ color: accentColor }}>✓</span>;
  if (value === 'no') return <span className="text-[#a3a3a3]">—</span>;
  return <span className="text-[#555]">{value}</span>;
};

export default function PromoteComparisonSection({
  accentColor,
  eyebrow,
  headingHtml,
  introText,
  columns,
  rows,
}: PromoteComparisonSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase" style={{ color: accentColor }}>
            {eyebrow}
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black leading-tight text-[#111111]">
            <span dangerouslySetInnerHTML={{ __html: headingHtml }} />
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[#666666] text-sm sm:text-base leading-relaxed">{introText}</p>
        </div>

        <div className="rounded-2xl border border-[#e4e4e4] overflow-hidden bg-[#f7f7f6]">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse">
              <thead className="bg-[#0d0f12] text-white">
                <tr>
                  <th className="text-left px-4 py-4 text-xs font-semibold text-white/70">{columns.feature}</th>
                  <th className="text-left px-4 py-4 text-xs font-semibold" style={{ color: accentColor }}>
                    {columns.twap}
                  </th>
                  <th className="text-left px-4 py-4 text-xs font-semibold text-white/70">{columns.directory}</th>
                  <th className="text-left px-4 py-4 text-xs font-semibold text-white/70">{columns.editorial}</th>
                  <th className="text-left px-4 py-4 text-xs font-semibold text-white/70">{columns.social}</th>
                  <th className="text-left px-4 py-4 text-xs font-semibold text-white/70">{columns.ceo}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className="border-t border-[#e5e5e5]">
                    <td className="px-4 py-3 text-sm text-[#1f1f1f]">{row.feature}</td>
                    <td className="px-4 py-3 text-sm bg-[#f1f1f1] font-semibold">{renderValue(row.twap, accentColor)}</td>
                    <td className="px-4 py-3 text-sm">{renderValue(row.directory, accentColor)}</td>
                    <td className="px-4 py-3 text-sm">{renderValue(row.editorial, accentColor)}</td>
                    <td className="px-4 py-3 text-sm">{renderValue(row.social, accentColor)}</td>
                    <td className="px-4 py-3 text-sm">{renderValue(row.ceo, accentColor)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
