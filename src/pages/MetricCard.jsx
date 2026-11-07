export const MetricCard = ({ title, value, subtitle, icon, iconClassName }) => {
  return (
    <article
      aria-labelledby={`${title}-metric-title`}
      className="flex items-start gap-2 p-5 relative flex-1 grow bg-[#f1f5ec] rounded-[var(--shape-corner-large)]"
    >
      <div className="flex items-start relative flex-1 grow rounded-[var(--shape-corner-large)]">
        <div className="flex items-start relative flex-1 grow z-[1] rounded-xl overflow-hidden">
          <div className="flex flex-col items-start gap-4 relative flex-1 grow">
            <h2
              id={`${title}-metric-title`}
              className="relative w-fit mt-[-1.00px] text-3xl font-inter font-normal text-m3-schemes-on-surface-duplicate text-sm tracking-[0] leading-[normal]"
            >
              {title}
            </h2>
            <p className="relative self-stretch font-m3-headline-medium text-m3-schemes-on-surface-duplicate">
              {value}
            </p>
            <p className="relative self-stretch font-inter font-normal text-lightgreen-adarkgreen text-[13px] tracking-[0] leading-[18.9px]">
              {subtitle}
            </p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute w-full h-full top-0 left-0 z-0 bg-m3-schemes-surface-container-low-duplicate rounded-xl"
        />
      </div>
      <img
        className={iconClassName || "relative w-6 h-6"}
        alt=""
        aria-hidden="true"
        src={icon}
      />
    </article>
  );
};