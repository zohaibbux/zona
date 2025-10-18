import React from "react";
import Image from "next/image";

export default function PromisePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-white rounded-full shadow-soft border border-gray-100">
            <span className="w-2 h-2 bg-secondary rounded-full"></span>
            <span className="text-primary text-sm font-semibold">
              Our Commitment
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
            A Partner
            <span className="block text-dark mt-2">You Can Trust</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border-2 border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      At Zona Scientific, we are committed to delivering
                      excellence through our unwavering promise of quality,
                      expertise, support, and innovation. Every product in our
                      portfolio is meticulously evaluated to meet rigorous
                      industry standards, ensuring reliable performance even in
                      the most challenging conditions.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border-2 border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Beyond providing equipment, we pride ourselves on offering
                      expert insights and tailored solutions to meet the unique
                      needs of each client. Our dedicated team ensures
                      consistent, responsive support, whether its answering
                      product inquiries or delivering customized solutions.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border-2 border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      By staying ahead of scientific advancements, we
                      continually update our product range to offer the latest
                      tools and technologies. This commitment to precision,
                      reliability, and service reflects our belief in empowering
                      our clients success and contributing to the advancement of
                      science.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl"></div>
                <Image
                  src="/promise-partnership-image.png"
                  alt="Scientific Partnership"
                  width={471}
                  height={425}
                  className="relative w-full h-auto rounded-2xl shadow-strong"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
