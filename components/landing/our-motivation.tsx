import Image from "next/image";
import ScoutlyLogo from "@/assets/landing/scoutly_logo_motiv.png";

const OurMotivation = () => {
  return (
    <section className="w-full px-5 md:px-10 md:py-40 py-20">
      <div className="container mx-auto flex items-center justify-center bg-motivation-bg bg-cover min-h-[398px] rounded-[40px] flex-col gap-3 md:gap-6 py-8">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <h2 className="text-primary-blue text-[19px]/[24px] md:text-[2.375rem]/[2.9562rem] font-bold uppercase">
            Our motivation at
          </h2>
          <Image
            className="w-[190px] h-auto"
            src={ScoutlyLogo}
            alt="scoutly-logo-2"
          />
        </div>
        <p className="text-center text-description text-primary-blue max-w-[80%] md:max-w-[45%]">
          At Scoutly, we&apos;re driven by a passion to connect hockey players and
          teams. Our goal is to simplify recruitment, foster talent discovery,
          and build a thriving community that empowers hockey&apos;s future.
        </p>
      </div>
    </section>
  );
};

export default OurMotivation;
