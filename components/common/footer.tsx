"use client"
import Image from "next/image";
import ScoutlyLogo from "@/assets/landing/logo_scoutly_footer.png";
import Link from "next/link";
import { FacebookLogo, InstagramLogo, XLogo, YoutubeLogo } from "../icons";
import SignUpForm from "@/components/common/sign-up-form";
import { scrollToSection } from "@/lib/utils";
import { SECTIONS } from "@/lib/const";

const Footer = () => {
  return (
    <section className="w-full px-5 md:px-10 md:py-20 py-10 bg-primary-blue">
      <div className="container mx-auto">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center justify-between">
          <div className="flex flex-col gap-[28px] w-1/3">
            <Image
              className="max-w-[297px]"
              src={ScoutlyLogo}
              alt="scoutly-logo-footer"
            />
            <p className="text-white text-description">
              Stay connected with Scoutly. Join our community and be the first
              to know about updates, launches, and exclusive offers!
            </p>
            <div className="flex items-center gap-[1.875rem] mt-[10px]">
              <Link href="/">
                <FacebookLogo />
              </Link>
              <div className="h-5 w-px bg-white" />
              <Link href="/">
                <InstagramLogo />
              </Link>
              <div className="h-5 w-px bg-white" />
              <Link href="/">
                <XLogo />
              </Link>
              <div className="h-5 w-px bg-white" />
              <Link href="/">
                <YoutubeLogo />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white uppercase text-footer-sub-title">
              Quick Links
            </h4>
            <ul className="text-white text-description flex flex-wrap flex-col justify-between max-h-[96px] gap-[12px]">
              <li
                onClick={() => scrollToSection(SECTIONS.HERO)}
                className="cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => scrollToSection(SECTIONS.ABOUTUS)}
                className="cursor-pointer"
              >
                About Us
              </li>
              <li
                onClick={() => scrollToSection(SECTIONS.FORPLAYERS)}
                className="cursor-pointer"
              >
                Features
              </li>
              <li
                onClick={() => scrollToSection(SECTIONS.FORPLAYERS)}
                className="cursor-pointer"
              >
                For Players
              </li>
              <li
                onClick={() => scrollToSection(SECTIONS.FORTEAMS)}
                className="cursor-pointer"
              >
                For Teams
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white uppercase text-footer-sub-title">
              Subscribe
            </h4>
            <p className="text-white text-description">
              Subscribe and be the first to download our app when we launch.{" "}
            </p>
            <SignUpForm />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 mt-10 w-full">
          <div className="w-full h-px bg-white" />
          <div className="text-white flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <p>©</p>
              <p>Copyright 2025. Scoutly. All Right Reserved.</p>
            </div>
            <div className="flex items-center gap-4 underline">
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
