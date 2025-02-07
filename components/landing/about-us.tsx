import AboutUsBg from "@/assets/landing/about_us.png";
import ScoutlyLogo from "@/assets/landing/logo_scoutly_footer.png";
import Image from "next/image";
import SectionTitle from "../ui/section-title";
import AboutUsCard from "../ui/about-us-card";
import { SECTIONS } from "@/lib/const";

const AboutUs = () => {
  const aboutUsCards = [
    {
      id: "1",
      title: "Uniting Hockey Players and Teams",
      description:
        "Scoutly is the go-to platform where hockey talent meets opportunity. Players showcase their skills, teams find their perfect fit, and connections drive success.",
    },
    {
      id: "2",
      title: "Empowering the Hockey Community",
      description:
        "We believe every player deserves to shine. Our app simplifies scouting, builds connections, and strengthens the hockey ecosystem, making it easier for talent to be discovered.",
    },
    {
      id: "3",
      title: "Your Next Opportunity Awaits",
      description:
        "Whether you're a player seeking a team or a coach searching for talent, Scoutly bridges the gap, helping you achieve your goals faster and smarter.",
    },
  ];

  return (
    <section id={SECTIONS.ABOUTUS} className="w-full px-5 md:px-10 py-20 relative ">
      <div className="container mx-auto flex justify-center lg:justify-end items-center bg-about-us-bg bg-cover lg:bg-none lg:bg-white rounded-[40px] lg:rounded-none py-4 px-4 sm:py-10 sm:px-10 lg:py-0">
        <div className="flex flex-col items-center gap-[30px] w-[552px] z-10 md:mr-10">
          <SectionTitle title="About Us" />
          {aboutUsCards.map((card) => (
            <AboutUsCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <Image className="hidden lg:block lg:absolute left-0 top-[40px] right-5" src={AboutUsBg} alt="about-us-bg" />
      <Image
        className="hidden lg:block absolute bottom-[5.75rem] left-20 w-[284px] h-auto"
        src={ScoutlyLogo}
        alt="scoutly-logo"
      />
    </section>
  );
};

export default AboutUs;
