import React from "react";
import Link from "next/link";
import { faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
      

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <a
                  className="m-2"
                  href="https://twitter.com/"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    size="lg"
                    className="w-8 h-8 text-white hover:text-[#EB5161]"
                  />
                </a>
              </li>
              <li className="ml-4">
                <a className="m-2" href="https://t.me/">
                  <FontAwesomeIcon
                    icon={faTelegram}
                    size="lg"
                    className="w-8 h-8 text-white hover:text-[#EB5161]"
                  />
                </a>
              </li>
             
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              Listed on Arbitrum Chain{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
