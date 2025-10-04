import facebookIcon from "@/assets/icons/facebook.svg";
import googleIcon from "@/assets/icons/google.svg";
import microsoftIcon from "@/assets/icons/microsoft.svg";
import gitIcon from "@/assets/icons/github.svg";
import xIcon from "@/assets/icons/x.svg";

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
      <div className="max-w-6xl mx-auto text-sm">
        <div className="flex flex-cols-1 md:flex-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.svg" alt="logo" className="w-10 h-10" />
              <h2 className="text-2xl ml-2">Byway</h2>
            </div>
            <p className="text-gray-300 leading-relaxed w-130 mb-2 ">
              Empowering learners through accessible and engaging online
              education.
            </p>
            <p className="text-gray-300 leading-relaxed w-120">
              Byway is a leading online learning platform dedicated to providing
              high-quality, flexible, and affordable educational experiences.
            </p>
          </div>

          <div className="w-30">
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

          <div className="w-30">
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

          <div className="w-90">
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
                  className="w-11 h-11 bg-white rounded-full flex items-center justify-center"
                >
                  <img src={icon.src} alt={icon.alt} className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
