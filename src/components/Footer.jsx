import {
  RiBookOpenLine,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "@remixicon/react";
import { footerLinks } from "../constant/data";
function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-9">
      <div className="container space-y-14 sm:space-y-20 lg:space-y-24">
        {/* footer top */}
        <div className="grid gap-5 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_0.7fr_0.8fr_0.8fr]">
          {/* logo  */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <span className="bg-lime-600 text-white size-8 flex items-center justify-center rounded-lg">
                <RiBookOpenLine size={20} />
              </span>

              <span className="font-sans text-xl font-bold">Brischo</span>
            </div>
            <p className="text-neutral-400">
              Empowering learners worldwide with quality education and skills.
            </p>
            <div className="flex items-center gap-4">
              {[
                RiFacebookFill,
                RiTwitterXFill,
                RiInstagramFill,
                RiLinkedinFill,
              ].map((Icon) => (
                <a
                  key={Icon}
                  href="#"
                  className="bg-neutral-800 p-2 rounded-full hover:bg-lime-600 focus:bg-lime-600 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* social links */}

          {/* List  */}
          {footerLinks.map((link) => (
            <div className="space-y-3" key={link.id}>
              <p className="font-bold text-lg">{link.title}</p>
              <ul className="space-y-2">
                {link.links.map((item) => (
                  <li key={item}>
                    <a
                      className="text-neutral-400 hover:text-lime-400 focus:text-lime-400 transition-colors"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* footer bottom  */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 items-center justify-between">
          <p className="text-neutral-400">
            &copy; {new Date().getFullYear()} Brischo.all rights reserved.
          </p>

          {/* links  */}
          <div className="flex gap-5 flex-wrap">
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map(
              (label) => (
                <a
                  className="text-neutral-400 hover:text-lime-400 focus:text-lime-400 transition-colors"
                  href="#"
                  key={label}
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
