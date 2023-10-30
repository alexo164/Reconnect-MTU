import Link from "next/link";
import { footerLinks } from "@/data";
import "./Footer.module.scss"
import classes from "./Footer.module.scss";

const Footer = () => {
  const { legal } = footerLinks;
  return (
    <div className="mt-auto">
      <footer className="bg-black py-3 mt-0 flex flex-row">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* About Us */}
            <div className="flex flex-col text-white col-span-2">
              <div className="text-lg font-semibold mt-3">
                <h1>Reconnect</h1>
              </div>
            </div>

            {/* Legal */}
            <div className="text-white flex flex-col">
              {legal.map((legal, index) => {
                return (
                  <div className="mx-3 px-3" key={index}>
                    <Link
                      href={legal.url}
                      className="text-white footer-links text-sm"
                    >
                      {legal.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        

        {/* Bottom */}
      </footer>
    </div>
  );
};

export default Footer;
