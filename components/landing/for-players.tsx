import React from "react";
import SectionTitle from "../ui/section-title";
import { HockeyPuck, Maginfier, Star, Team } from "../icons";
import ForCard from "../ui/for-card";
import Image from "next/image";
import ForPlayersImage from "@/assets/landing/for_players.png"

const ForPlayers = () => {
  const forPlayersCards = [
    {
      id: "one_player_card",
      title: "Showcase Skills",
      description:
        "Upload gameplay clips to highlight your abilities and attract attention from teams looking for players like you.",
      icon: <HockeyPuck />,
    },
    {
      id: "two_player_card",
      title: "Build Your Reputation",
      description:
        "Rate and be rated by other players, helping you build credibility and increase your chances of being scouted.",
      icon: <Star />,
    },
    {
      id: "three_player_card",
      title: "Find the Right Team",
      description:
        "Connect with teams that match your skills and aspirations, making it easier to find your perfect fit.",
      icon: <Team />,
    },
    {
      id: "four_player_card",
      title: "Simplify Your Search",
      description:
        "Access detailed team profiles and recruitment opportunities to make the process of finding your next team hassle-free.",
      icon: <Maginfier />,
    },
  ];

  return (
    <section className="w-full px-5 md:px-10 md:py-40 py-20 relative overflow-x-hidden">
      <div className="container mx-auto flex flex-col gap-[30px]">
        <div className="w-2/3 md:w-1/3">
          <SectionTitle title="For Players" />
        </div>
        <div className="flex flex-col items-center min-[1330px]:flex-row gap-[30px] md:gap-[60px]">
          <div className="w-full min-[1330px]:w-2/3 flex flex-wrap gap-5 md:gap-10 items-center justify-center min-[1330px]:justify-start">
            {forPlayersCards.map((card) => (
              <ForCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
          <div className="min-[1420px]:absolute -right-20">
            <Image src={ForPlayersImage} alt="for-players-image"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForPlayers;
