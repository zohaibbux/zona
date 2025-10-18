import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/footer-logo-white.png"
                alt="Zona Scientific Logo"
                width={250}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm md:text-base leading-relaxed mb-6 text-gray-300 max-w-md">
              We pride ourselves on being more than just a distributor of
              laboratory equipment—we are a cornerstone of precision,
              reliability, and innovation in the scientific community.
            </p>

            {/* Social Links - Optional */}
            <div className="flex gap-4 mt-6">
              {/* Add social media links here if needed */}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm md:text-base text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about-us"
                  className="text-sm md:text-base text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-sm md:text-base text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6">Contact & Location</h4>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+923322902327"
                className="flex items-center gap-3 text-sm md:text-base text-gray-300 hover:text-secondary transition-colors"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span>+92 3322902327</span>
              </a>
              <a
                href="mailto:zohaibbux3@gmail.com"
                className="flex items-center gap-3 text-sm md:text-base text-gray-300 hover:text-secondary transition-colors"
                aria-label="Email us at zohaibbux3@gmail.com"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span>zohaibbux3@gmail.com</span>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden border-2 border-white/10 hover:border-secondary/50 transition-colors">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.289467!2d67.0933844!3d24.9367752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f003f588437%3A0xb1a34ea5d863bdf7!2sZona%20Scientific!5e0!3m2!1sen!2s!4v1729267890124!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zona Scientific Location"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Services & Products */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <Link
                  href="/promise"
                  className="text-sm md:text-base text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Promise
                </Link>
              </li>
              <li>
                <Link
                  href="/mission"
                  className="text-sm md:text-base text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/importing"
                  className="text-sm md:text-base text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Importing
                </Link>
              </li>
              <li>
                <Link
                  href="/distributing"
                  className="text-sm md:text-base text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Distributing
                </Link>
              </li>
            </ul>

            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/lab-equipments"
                  className="text-sm md:text-base text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Lab Equipments
                </Link>
              </li>
              <li>
                <Link
                  href="/chemical-salts"
                  className="text-sm md:text-base text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Chemical Salts
                </Link>
              </li>
              <li>
                <Link
                  href="/graded-acids"
                  className="text-sm md:text-base text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  Lab Graded Acids
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Zona Scientific. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
