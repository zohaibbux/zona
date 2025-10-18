import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/footer-logo-white.png"
              alt="Zona Scientific Logo"
              width={250}
              height={80}
              className="mb-4"
            />
            <p className="text-sm md:text-base leading-relaxed mb-4">
              We pride ourselves on being more than just a distributor of
              laboratory equipment—we are a cornerstone of precision,
              reliability, and innovation in the scientific community.
            </p>
            <p className="text-sm md:text-base mb-2">+92 3322902327</p>
            <p className="text-sm md:text-base">
              <a
                href="mailto:zohaibbux3@gmail.com"
                className="hover:text-secondary transition-colors"
              >
                zohaibbux3@gmail.com
              </a>
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-4 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm md:text-base hover:text-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about-us"
                  className="text-sm md:text-base hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-sm md:text-base hover:text-secondary transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Products */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-4 uppercase">
              Services
            </h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  href="/importing"
                  className="text-sm md:text-base hover:text-secondary transition-colors"
                >
                  Importing
                </Link>
              </li>
              <li>
                <Link
                  href="/distributing"
                  className="text-sm md:text-base hover:text-secondary transition-colors"
                >
                  Distributing
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold text-base md:text-lg mb-4 uppercase">
              Products
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/lab-equipments"
                  className="text-sm md:text-base hover:text-secondary transition-colors"
                >
                  Lab Equipments
                </Link>
              </li>
              <li>
                <Link
                  href="/chemical-salts"
                  className="text-sm md:text-base hover:text-secondary transition-colors"
                >
                  Chemical Salts
                </Link>
              </li>
              <li>
                <Link
                  href="/graded-acids"
                  className="text-sm md:text-base hover:text-secondary transition-colors"
                >
                  Lab Graded Acids
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary/90 text-center py-4 border-t border-white/10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Zona Scientific. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
