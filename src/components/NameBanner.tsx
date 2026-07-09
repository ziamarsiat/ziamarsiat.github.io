import feuillageBanner from "@/assets/feuillage-banner.webp";

const NameBanner = () => {
  return (
    <section
      className="relative w-full h-48 md:h-72 lg:h-96 overflow-hidden flex flex-col items-center justify-center gap-2"
      aria-label="Zia Marsiat"
    >
      <img
        src={feuillageBanner}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <h2 className="relative font-heading text-white/30 text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight text-center px-6 pr-8 mix-blend-overlay leading-none">
        Zia <em className="not-italic">Marsiat</em>
      </h2>
      <p className="relative font-body text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#7a6b5c]">
        Actrice-conteuse · Interprète nature · Plasticienne
      </p>
    </section>
  );
};

export default NameBanner;
