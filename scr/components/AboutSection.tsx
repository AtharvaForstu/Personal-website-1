import { AboutBackground } from './backgrounds/AboutBackground';
import AboutBackground3D from './backgrounds/AboutBackground3D';
import Card3DSection from './sections/Card3DSection';
import AchievementsSection from './sections/AchievementsSection';
import FadeInSection from './animations/FadeInSection';
import GlowingText from './ui/GlowingText';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden">
      <AboutBackground />
      <AboutBackground3D />
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
          <FadeInSection delay={0.2}>
            <div className="text-center mt-8">
              {' '}
              {/* Added margin-top */}
              <h1 className="font-press-start text-2xl md:text-[2.125rem] leading-relaxed font-bold">
                Hello, I'm <GlowingText intensity="strong">Atharva</GlowingText>
              </h1>
            </div>
          </FadeInSection>

          <Card3DSection />
          <AchievementsSection />
        </div>
      </div>
    </section>
  );
}
