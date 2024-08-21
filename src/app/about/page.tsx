// import AboutHero from '../components/AboutHero';
import OurMission from '@/components/about/OurMission';
import OurStory from '@/components/about/OurStory';
import TeamSection from '@/components/about/TeamSection';
import  AboutHero from '@/components/about/AboutHero';
import  StatisticsDisplay from '@/components/about/StateItems';
import OurServices from '@/components/about/OurServices';
import OurVision from '@/components/about/OurVision';

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <AboutHero />
        <OurStory />
        <StatisticsDisplay />
        <OurServices/>
        <OurVision/>
        <OurMission />  
        <TeamSection />
      </div>
    </div>
  );
}
