import Image from "next/image";
import CTAImage from "@/assets/landing/cta.webp";
import GPLogo from "@/assets/landing/gp_logo.png";
import ASLogo from "@/assets/landing/appstore_logo.png";

import { Sign, ShakeHands, SwedishFlag } from "../icons";
import CTACard from "../ui/cta-card";
import { SignUpDialog } from "../common/sign-up-dialog";

const CTA = () => {
  const CTACards = [
    { id: "cta_one", icon: <Sign />, text1: "100+", text2: "on waiting list" },
    { id: "cta_two", icon: <ShakeHands />, text1: "10+", text2: "Teams" },
    { id: "cta_three", icon: <SwedishFlag />, text1: "Sweden", text2: "Based" },
  ];

  return (
    <section className="w-full px-5 md:px-10 pt-20 pb-5">
      <div className="container mx-auto flex items-center flex-col-reverse lg:flex-row gap-16 lg:justify-between">
        <div className="flex flex-col items-start gap-[35px] md:gap-[70px]">
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-[1rem]/[1.5rem] md:text-[1.9375rem]/[2.9375rem] font-semibold text-primary-blue uppercase">
              Subscribe and be the first to download
            </h4>
            <p className="text-secondary-blue text-[1.125rem]/[1.5rem]">
              Join Scoutly today and be part of the future of hockey! Sign up
              now to stay updated and get early access to connect, showcase your
              skills, and discover new opportunities.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[15px] md:gap-[30px]">
            <div className="flex flex-wrap items-center gap-6">
              <SignUpDialog trigger={<Image
                className="w-[150px] h-auto cursor-pointer"
                src={GPLogo}
                alt="gp-logo-image"
              />}></SignUpDialog>
              <SignUpDialog trigger={<Image
                className="w-[150px] h-auto cursor-pointer"
                src={ASLogo}
                alt="as-logo-image"
              />}></SignUpDialog>
            </div>
            <div className="flex flex-wrap gap-6 items-center justify-center min-[440px]:justify-start">
              {CTACards.map((card) => (
                <CTACard
                  key={card.id}
                  icon={card.icon}
                  text1={card.text1}
                  text2={card.text2}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <Image src={CTAImage} alt="cta-image" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
