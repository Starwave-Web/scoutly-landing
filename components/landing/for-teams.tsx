import React from "react";
import SectionTitle from "../ui/section-title";
import { Cup, Rating, HockeyBat, Luggage } from "../icons";
import ForCard from "../ui/for-card";
import Image from "next/image";
import ForTeamsImage from "@/assets/landing/for_teams.webp";
import { SECTIONS } from "@/lib/const";

const ForTeams = () => {
  const ForTeamsCards = [
    {
      id: "one_teams_card",
      title: "Discover Talent",
      description:
        "Browse through player clips and profiles to find the perfect fit for your team’s needs and goals.",
      icon: <Cup />,
    },
    {
      id: "two_teams_card",
      title: "Evaluate with Ratings",
      description:
        "Use player ratings and peer reviews to make informed decisions on who to recruit and trust.",
      icon: <Rating />,
    },
    {
      id: "three_teams_card",
      title: "Connect with Players",
      description:
        "Quickly find players that meet your team’s requirements and reach out directly for a seamless recruitment process.",
      icon: <HockeyBat />,
    },
    {
      id: "four_teams_card",
      title: "Connect with other teams",
      description:
        "Easily find teams  to collaborate, create tournaments events or just connect with other teams on our platform",
      icon: <Luggage />,
    },
  ];

  return (
    <section id={SECTIONS.FORTEAMS} className="w-full px-5 md:px-10 md:py-40 py-20 relative overflow-x-hidden bg-for-t-grad-bg from-[#29C7C7_0%] via-[#77E4E4_18%] to-[transparent_50%]">
      <div className="container mx-auto flex flex-col gap-[30px]">
        <div className="w-2/3 md:w-1/3 self-end">
          <SectionTitle title="For Teams" />
        </div>
        <div className="flex flex-col items-center min-[1420px]:flex-row gap-[30px] md:gap-[60px] justify-end">
          <div className="min-[1420px]:absolute -left-52">
            <Image className="xl:w-[869px] xl:h-[668px]" src={ForTeamsImage} alt="for-teams-image" />
          </div>
          <div className="w-full min-[1409px]:w-2/3 flex flex-wrap gap-5 md:gap-10 items-center justify-center min-[1330px]:justify-end">
            {ForTeamsCards.map((card) => (
              <ForCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForTeams;
