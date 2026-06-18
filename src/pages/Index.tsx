import HeroSection from "@/components/HeroSection";
import AgesSection from "@/components/AgesSection";
import ContactSection from "@/components/ContactSection";
import paperTexture from "@/assets/paper-texture-2.png";

const Index = () => {
  return (
    <main
      className="min-h-screen font-body"
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundRepeat: "repeat",
        backgroundSize: "600px auto",
      }}
    >
      <HeroSection />
      <AgesSection />
      <ContactSection />

      <footer className="py-8 px-6 text-center border-t border-border">
        <p className="font-body text-sm text-muted-foreground">
          Photo : Tiffany's Story -{" "}
          <a
            href="https://objectiffb.be/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            objectiffb.be
          </a>
        </p>
      </footer>
    </main>
  );
};

export default Index;
