import facebookIcon from "@/assets/icons/facebook.svg";
import googleIcon from "@/assets/icons/google.svg";
import microsoftIcon from "@/assets/icons/microsoft.svg";
import gitIcon from "@/assets/icons/github.svg";
import xIcon from "@/assets/icons/x.svg";
import { Link } from "react-router";

const icons = [
  { src: facebookIcon, alt: "Facebook", href: "https://facebook.com" },
  { src: gitIcon, alt: "GitHub", href: "https://github.com" },
  { src: googleIcon, alt: "Google", href: "https://google.com" },
  { src: xIcon, alt: "Twitter", href: "https://x.com" },
  { src: microsoftIcon, alt: "Microsoft", href: "https://microsoft.com" },
];
const programs = [
  "Art & Design",
  "Business",
  "IT & Software",
  "Languages",
  "Programming",
];
const getHelpLinks = ["Contact Us", "Latest Articles", "FAQ"];

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16 px-10">
      <div className="grid grid-cols-[auto_auto_auto_auto] gap-6 text-sm">
        <div className="col-span-4 xl:col-span-1">
          {/* logo */}
          <Link
            to="/"
            className="flex items-center space-x-1 text-lg font-semibold text-white mb-4"
          >
            <img src="/logo.svg" alt="Byway Logo" className="h-9 w-9" />
            Byway
          </Link>
          {/* description */}
          <p className="text-gray-300 leading-relaxed w-full max-w-[300px] sm:max-w-[410px] mb-2 ">
            Empowering learners through accessible and engaging online
            education.
            <br /> Byway is a leading online learning platform dedicated to
            providing high-quality, flexible, and affordable educational
            experiences.
          </p>
        </div>
        <div className="md:col-span-1 col-span-4 w-30">
          <h3 className="text-lg font-semibold mb-6">Get Help</h3>
          <ul className="space-y-3">
            {getHelpLinks.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-1 col-span-4 w-30">
          <h3 className="text-lg font-semibold mb-6">Programs</h3>
          <ul className="space-y-3">
            {programs.map((program, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {program}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-1 col-span-4 w-90">
          <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
          <div className="space-y-2 text-gray-300 mb-6">
            <p>Address: 123 Main Street, Anytown, CA 12345</p>
            <p>Tel: +1 (123) 456-7890</p>
            <p>Mail: bywayedu@webkul.in</p>
          </div>
          <div className="flex space-x-4">
            {icons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white hover:bg-[#e7e6e6] transition-all duration-200 rounded-full flex items-center justify-center"
              >
                <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
