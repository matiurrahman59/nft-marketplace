import Link from "next/link";

import Logo from "./Logo";
import SocialMediaLogo from "./SocialMediaLogo";
import { NAV_Links } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="border-t-2 border-dark bg-secondary">
      <div className="main-container py-10">
        <div className="flex flex-col gap-[30px] lg:flex-row lg:justify-between">
          <div>
            {/* Footer logo */}
            <Logo />
            <div className="pt-5 opacity-80 lg:pt-[30px]">
              <p>NFT marketplace UI created with Anima for Figma.</p>
              <div className="pt-5">
                <p>Join our community</p>
                <SocialMediaLogo />
              </div>
            </div>
          </div>

          {/* Other page links */}
          <div>
            <h5 className="font-spaceMono font-bold leading-[35px]">Explore</h5>
            <div className="flex flex-col gap-5 pt-5 opacity-80 lg:pt-[25px]">
              <Link href={NAV_Links.marketPlace}>Marketplace</Link>
              <Link href={NAV_Links.topCreator}>Rankings</Link>
              <Link href={NAV_Links.signUp}>Connect a wallet</Link>
            </div>
          </div>
        </div>
        {/* Bottom border line */}
        <div className="mt-[30px] border-t-[1px] border-label">
          <p className="pt-5 text-[12px] opacity-80">
            Ⓒ Matiur Rahman. Design taken from figma community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
