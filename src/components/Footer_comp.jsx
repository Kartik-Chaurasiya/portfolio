import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
} from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import React from "react";

export function Footer_comp() {
  return (
    <div className="dark bg-[#0a192f] text-gray-300">
      <Footer container>
        <div className="w-full">
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="https://github.com/Kartik-Chaurasiya" icon={BsGithub} />
              <FooterIcon href="https://www.linkedin.com/in/kartik-j-chaurasiya/" icon={BsLinkedin} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
