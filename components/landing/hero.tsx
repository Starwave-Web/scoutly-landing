import Image from "next/image";
import ScoutlyHero from "@/assets/landing/hero_mobile.webp";
import { Button } from "@/components/ui/button";
import { SignUpDialog } from "../common/sign-up-dialog";
import { SECTIONS } from "@/lib/const";

const Hero = () => {
  return (
    <section id={SECTIONS.HERO} className="w-full px-5 md:px-10 py-[1.875rem]">
      <div className="container mx-auto">
        <div className="rounded-[2.5rem] bg-hero-bg flex flex-col-reverse md:flex-row items-center">
          <Image
            className="md:max-w-[50%] lg:w-[475px] xl:w-[575px] 2xl:w-[675px] h-auto"
            src={ScoutlyHero}
            alt="scoutly-hero"
          />
          <div className="flex items-center w-full md:w-1/2 justify-end py-5 px-5 md:py-10 md:px-10">
            <div className="w-full bg-transparent border-[9px] md:border-[18px] border-white rounded-[2.5rem] lg:py-[60px]">
              <div className="w-full bg-primary-blue p-6 lg:p-12 rounded-[31px] md:rounded-[22px] lg:-ml-[78px] flex flex-col items-start gap-6 md:gap-11">
                <h1 className="text-white text-h1-mobile md:text-h1">
                  Connect.
                  <br />
                  Showcase.
                  <br />
                  Join.
                  <br />
                  Scoutly Awaits.
                </h1>
                <div className="flex flex-col items-start gap-2">
                  <h2 className="text-white text-h2-mobile md:text-h2">
                    Be First to Know!
                  </h2>
                  <SignUpDialog trigger={<Button className="font-semibold">Sign Up</Button>} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
