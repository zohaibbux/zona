import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[730px] overflow-hidden">
        <Image
          src="/hero-laboratory-background.png"
          alt="Laboratory Background"
          fill
          className="object-cover opacity-86"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-transparent">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 leading-tight">
                Welcome to
                <br />
                <span className="block mt-2">Zona Scientific</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed max-w-xl">
                At Zona scientific, we specialize in the distribution of
                high-quality laboratory scientific equipment, supporting
                research, development, and industrial processes across multiple
                sectors.
              </p>
              <a
                href="mailto:zohaibbux3@gmail.com"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Make Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl text-primary mb-4 font-normal">
            About Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-primary font-normal leading-tight mb-8">
                "Your trusted partner for reliable laboratory tools and
                materials, serving research, healthcare, and industry needs."
              </h3>

              {/* Mission and Promise Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                {/* Mission Card */}
                <Link href="/mission" className="group">
                  <div className="bg-white border-2 border-primary/10 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="bg-primary w-20 h-20 flex items-center justify-center mb-4 rounded-sm">
                      <Image
                        src="/icon-mission.png"
                        alt="Mission Icon"
                        width={44}
                        height={44}
                      />
                    </div>
                    <h4 className="text-2xl font-semibold text-primary mb-3">
                      Mission
                    </h4>
                    <p className="text-primary text-sm leading-relaxed">
                      We aim to empower innovation by making advanced scientific
                      tools accessible to researchers and innovators driving
                      discovery and development.
                    </p>
                  </div>
                </Link>

                {/* Promise Card */}
                <Link href="/promise" className="group">
                  <div className="bg-white border-2 border-primary/10 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="bg-primary w-20 h-20 flex items-center justify-center mb-4 rounded-sm">
                      <Image
                        src="/icon-promise-heart.png"
                        alt="Promise Icon"
                        width={44}
                        height={44}
                      />
                    </div>
                    <h4 className="text-2xl font-semibold text-primary mb-3">
                      Promise
                    </h4>
                    <p className="text-primary text-sm leading-relaxed">
                      At Zona Scientific, we go beyond being a distributor. We
                      are your partner in success, helping you achieve your
                      goals with the precision and reliability you deserve.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/about-us-laboratory.png"
                alt="Laboratory Equipment"
                width={571}
                height={584}
                className="w-full h-auto rounded-tl-[80px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl text-primary mb-4 font-normal">
              Services
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-primary font-normal leading-tight">
              "Your journey,
              <br />
              our expertise"
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Services Description */}
            <div className="lg:col-span-1">
              <p className="text-primary text-base leading-relaxed">
                Our team ensures seamless integration of advanced tools across
                diverse sectors, empowering research and innovation. With a
                focus on precision and reliability, we are dedicated to enabling
                your success.
              </p>
            </div>

            {/* Service Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Importing Service */}
              <Link href="/importing" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src="/service-importing-image.png"
                      alt="Importing Service"
                      fill
                      className="object-cover rounded-tl-[80px]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="bg-primary w-20 h-20 flex items-center justify-center mb-4 rounded-sm">
                      <Image
                        src="/icon-calendar-schedule.png"
                        alt="Calendar Icon"
                        width={44}
                        height={44}
                      />
                    </div>
                    <h4 className="text-2xl font-semibold text-primary">
                      Importing
                    </h4>
                  </div>
                </div>
              </Link>

              {/* Distributing Service */}
              <Link href="/distributing" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src="/service-distributing-image.png"
                      alt="Distributing Service"
                      fill
                      className="object-cover rounded-tl-[80px]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="bg-primary w-20 h-20 flex items-center justify-center mb-4 rounded-sm">
                      <Image
                        src="/icon-dentist-service.png"
                        alt="Service Icon"
                        width={44}
                        height={44}
                      />
                    </div>
                    <h4 className="text-2xl font-semibold text-primary">
                      Distributing
                    </h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-20 relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/products-section-background.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary font-normal leading-tight mb-12 max-w-2xl">
            Products Empowering Innovation Across Industries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lab Equipments */}
            <Link href="/lab-equipments" className="group">
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary w-20 h-20 flex items-center justify-center mb-6 rounded-sm">
                  <Image
                    src="/icon-lab-equipment.png"
                    alt="Lab Equipment Icon"
                    width={44}
                    height={44}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-primary group-hover:text-secondary transition-colors">
                  Lab Equipments
                </h3>
              </div>
            </Link>

            {/* Chemical Salts */}
            <Link href="/chemical-salts" className="group">
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary w-20 h-20 flex items-center justify-center mb-6 rounded-sm">
                  <Image
                    src="/icon-chemical-flask.png"
                    alt="Chemical Flask Icon"
                    width={44}
                    height={44}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-primary group-hover:text-secondary transition-colors">
                  Chemical Salts
                </h3>
              </div>
            </Link>

            {/* Lab Graded Acids */}
            <Link href="/graded-acids" className="group">
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-primary w-20 h-20 flex items-center justify-center mb-6 rounded-sm">
                  <Image
                    src="/icon-acid-flask.png"
                    alt="Acid Flask Icon"
                    width={44}
                    height={44}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-primary group-hover:text-secondary transition-colors">
                  Lab Graded Acids
                </h3>
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
