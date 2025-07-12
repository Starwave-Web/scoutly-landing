"use client";

import ScoutlyLogo from "@/assets/common/logo_scoutly.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CloseIcon,
  FacebookLogo,
  HamburgerMenu,
  InstagramLogo,
  Mail,
  Phone,
  LinkedInLogo
} from "@/components/icons";
import { useState } from "react";
import { scrollToSection } from "@/lib/utils";
import { SECTIONS } from "@/lib/const";
import { SignUpDialog } from "./sign-up-dialog";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSectionMobile = (section: string) => {
    setOpen(!open);
    scrollToSection(section);
  };

  return (
    <nav className="sticky top-2 min-[650px]:-top-6 w-full min-[650px]:mt-[100px] px-5 md:px-10 z-50">
      <div className="container mx-auto px-5 hidden items-center justify-between mb-2 min-[650px]:flex">
        <div className="flex items-center gap-5 md:gap-20">
          <Link
            className="flex items-center gap-2"
            href="mailto:scoutlyapp@gmail.com"
          >
            <Mail />
            <p className="text-primary-blue text-description">
              scoutlyapp@gmail.com
            </p>
          </Link>
          <div className="flex items-center gap-2">
            <Phone />
            <p className="text-primary-blue text-description">
              + 46 (70) 320 0713
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="https://www.facebook.com/profile.php?id=61578280496316" target="_blank">
            <FacebookLogo />
          </Link>
          <Link href="https://www.instagram.com/scoutly.site/" target="_blank">
            <InstagramLogo />
          </Link>
          <Link href="https://www.linkedin.com/company/scoutlyapp/" target="_blank">
            <LinkedInLogo />
          </Link>
        </div>
      </div>
      <div className="container mx-auto  bg-primary-blue rounded-[1.25rem] h-[100px] flex items-center">
        <div className="xl:grid xl:grid-cols-3 xl:justify-items-center items-center px-[19px] md:px-[38px] w-full flex justify-between">
          <ul className="uppercase justify-self-start text-navigation text-white  whitespace-nowrap xl:flex items-center gap-4 hidden ">
            <li
              onClick={() => scrollToSection(SECTIONS.HERO)}
              className="cursor-pointer hover:text-secondary-blue"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection(SECTIONS.ABOUTUS)}
              className="cursor-pointer hover:text-secondary-blue"
            >
              About Us
            </li>
            <li
              onClick={() => scrollToSection(SECTIONS.FORPLAYERS)}
              className="cursor-pointer hover:text-secondary-blue"
            >
              Features
            </li>
            <li
              onClick={() => scrollToSection(SECTIONS.FORPLAYERS)}
              className="cursor-pointer hover:text-secondary-blue"
            >
              For Players
            </li>
            <li
              onClick={() => scrollToSection(SECTIONS.FORTEAMS)}
              className="cursor-pointer hover:text-secondary-blue"
            >
              For Teams
            </li>
          </ul>
          <Image
            onClick={() => scrollToSection(SECTIONS.HERO)}
            className="w-[10.625rem] md:w-[13.8125rem] h-auto justify-self-center"
            src={ScoutlyLogo}
            alt="scoutly-logo"
          />
          <div className="flex gap-3 items-center xl:justify-self-end">
            <HamburgerMenu
              onClick={() => setOpen(!open)}
              className="block xl:hidden"
            />
            <div className="hidden md:block">
              <SignUpDialog trigger={<Button className="font-semibold">Notify me on launch</Button>} />
            </div>
          </div>
        </div>
      </div>
      <div
        data-open={open}
        className="hidden data-[open=true]:flex justify-end w-full h-[120vh] bg-black/25 absolute -top-8 left-0 z-[2000]"
      >
        <div className="w-1/2 h-[120vh] bg-white px-[22px] py-[px] flex flex-col gap-11">
          <div className="self-end mt-14" onClick={() => setOpen(!open)}>
            <CloseIcon className="fill-primary-blue" />
          </div>
          <div>
            <ul className="flex flex-col gap-8 uppercase text-navigation text-primary-blue">
              <li
                onClick={() => scrollToSectionMobile(SECTIONS.HERO)}
                className="cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => scrollToSectionMobile(SECTIONS.ABOUTUS)}
                className="cursor-pointer"
              >
                About Us
              </li>
              <li
                onClick={() => scrollToSectionMobile(SECTIONS.FORPLAYERS)}
                className="cursor-pointer"
              >
                Features
              </li>
              <li
                onClick={() => scrollToSectionMobile(SECTIONS.FORPLAYERS)}
                className="cursor-pointer"
              >
                For Players
              </li>
              <li
                onClick={() => scrollToSectionMobile(SECTIONS.FORTEAMS)}
                className="cursor-pointer"
              >
                For Teams
              </li>
              <SignUpDialog trigger={<Button className="md:hidden bg-primary-blue">Notify me on launch</Button>} />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
