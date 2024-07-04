import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import React from "react";
import Logo from '../assets/logo.png'

export function Footer_comp() {
  return (
    <div className="dark bg-[#0a192f] text-gray-300">
      <Footer container>
        <div className="w-full">
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
              <FooterIcon href="#" icon={BsGithub} />
              <FooterIcon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
