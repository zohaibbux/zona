import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-gray-50">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-laboratory-background.png"
            alt="Laboratory Background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-white rounded-full shadow-soft border border-gray-100">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-primary text-sm font-semibold">
                Pioneering Scientific Excellence
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Welcome to
              <span className="block mt-2 text-dark">Zona Scientific</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl">
              At Zona scientific, we specialize in the distribution of
              high-quality laboratory scientific equipment, supporting research,
              development, and industrial processes across multiple sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:zohaibbux3@gmail.com"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1f2d6f] transition-all duration-300 shadow-medium hover:shadow-strong"
              >
                <span>Make Appointment</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="/#about-us"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Trusted Partner in
              <span className="block text-dark mt-2">
                Scientific Innovation
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="order-2 lg:order-1">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium mb-8 border-l-4 border-secondary pl-6">
                "Your trusted partner for reliable laboratory tools and
                materials, serving research, healthcare, and industry needs."
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl"></div>
                <Image
                  src="/about-us-laboratory.png"
                  alt="Laboratory Equipment"
                  width={571}
                  height={584}
                  className="relative w-full h-auto rounded-2xl shadow-strong"
                />
              </div>
            </div>
          </div>

          {/* Mission and Promise Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Link href="/mission" className="group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary hover:shadow-strong transition-all duration-300">
                <div className="bg-primary w-16 h-16 flex items-center justify-center mb-6 rounded-xl group-hover:scale-110 transition-transform">
                  <Image
                    src="/icon-mission.png"
                    alt="Mission Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  Mission
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  We aim to empower innovation by making advanced scientific
                  tools accessible to researchers and innovators driving
                  discovery and development.
                </p>
                <div className="mt-4 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Learn more</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Promise Card */}
            <Link href="/promise" className="group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary hover:shadow-strong transition-all duration-300">
                <div className="bg-primary w-16 h-16 flex items-center justify-center mb-6 rounded-xl group-hover:scale-110 transition-transform">
                  <Image
                    src="/icon-promise-heart.png"
                    alt="Promise Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  Promise
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  At Zona Scientific, we go beyond being a distributor. We are
                  your partner in success, helping you achieve your goals with
                  the precision and reliability you deserve.
                </p>
                <div className="mt-4 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Learn more</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2 block">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Your Journey,
              <span className="block text-dark mt-2">Our Expertise</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mt-6">
              Our team ensures seamless integration of advanced tools across
              diverse sectors, empowering research and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Importing Service */}
            <Link href="/importing" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 border-2 border-transparent hover:border-primary">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src="/service-importing-image.png"
                    alt="Importing Service"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-primary w-14 h-14 flex items-center justify-center rounded-xl">
                      <Image
                        src="/icon-calendar-schedule.png"
                        alt="Calendar Icon"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    Importing
                  </h4>
                  <p className="text-gray-700">
                    Global access to premium chemicals and equipment from
                    trusted international markets.
                  </p>
                </div>
              </div>
            </Link>

            {/* Distributing Service */}
            <Link href="/distributing" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 border-2 border-transparent hover:border-primary">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src="/service-distributing-image.png"
                    alt="Distributing Service"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-primary w-14 h-14 flex items-center justify-center rounded-xl">
                      <Image
                        src="/icon-dentist-service.png"
                        alt="Service Icon"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    Distributing
                  </h4>
                  <p className="text-gray-700">
                    Reliable distribution network ensuring quality products
                    reach your laboratory on time.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2 block">
              Products
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 max-w-4xl mx-auto">
              Empowering Innovation
              <span className="block text-dark mt-2">Across Industries</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lab Equipments */}
            <Link href="/lab-equipments" className="group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary hover:shadow-strong transition-all duration-300">
                <div className="bg-primary/10 w-20 h-20 flex items-center justify-center mb-6 rounded-xl group-hover:bg-primary transition-colors">
                  <Image
                    src="/icon-lab-equipment.png"
                    alt="Lab Equipment Icon"
                    width={40}
                    height={40}
                    className="group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-3">
                  Lab Equipments
                </h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive range of precision instruments for research and
                  analysis.
                </p>
                <div className="flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Explore</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Chemical Salts */}
            <Link href="/chemical-salts" className="group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary hover:shadow-strong transition-all duration-300">
                <div className="bg-primary/10 w-20 h-20 flex items-center justify-center mb-6 rounded-xl group-hover:bg-primary transition-colors">
                  <Image
                    src="/icon-chemical-flask.png"
                    alt="Chemical Flask Icon"
                    width={40}
                    height={40}
                    className="group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-3">
                  Chemical Salts
                </h3>
                <p className="text-gray-700 mb-4">
                  High-purity chemical salts for various laboratory
                  applications.
                </p>
                <div className="flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Explore</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Lab Graded Acids */}
            <Link href="/graded-acids" className="group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary hover:shadow-strong transition-all duration-300">
                <div className="bg-primary/10 w-20 h-20 flex items-center justify-center mb-6 rounded-xl group-hover:bg-primary transition-colors">
                  <Image
                    src="/icon-acid-flask.png"
                    alt="Acid Flask Icon"
                    width={40}
                    height={40}
                    className="group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-3">
                  Lab Graded Acids
                </h3>
                <p className="text-gray-700 mb-4">
                  Laboratory-grade acids meeting the highest quality standards.
                </p>
                <div className="flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Explore</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="sr-only">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>
      </section>
    </div>
  );
}
