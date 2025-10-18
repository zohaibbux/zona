import React from "react";
import Image from "next/image";

export default function ChemicalSaltsPage() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary via-primary to-[#1f2d6f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
            ⚗️ High Purity
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Chemical
            <span className="block bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
              Salts
            </span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Our product line features a diverse range of chemical salts
                    engineered to support various industrial applications with
                    the highest level of reliability and performance. We offer
                    Industrial Salts that are essential in processes such as
                    water treatment, deicing, and chemical manufacturing, each
                    carefully refined to ensure consistency and effectiveness.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
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
                          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                        />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Our Food-Grade Salts are crafted to meet stringent safety
                      and purity standards, making them ideal for use in food
                      processing, preservation, and flavoring applications. For
                      the Pharmaceutical sector, we supply pharmaceutical grade
                      salts that adhere to strict regulatory standards, ensuring
                      safety and purity for use in medicinal formulations and
                      healthcare products.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
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
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      In Agriculture, our salts contribute to better crop
                      yields, soil health, and animal nutrition, helping to
                      optimize productivity and sustainability in farming.
                      Additionally, our Specialty Salts are customizable to meet
                      unique, high precision requirements in specialized
                      applications, allowing us to serve a wide array of
                      industrial demands.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 border border-secondary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                      Each of our products is formulated to provide optimal
                      performance, backed by rigorous quality control to ensure
                      purity, consistency, and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-primary rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity"></div>
                <Image
                  src="/chemical-salts-image.png"
                  alt="Chemical Salts"
                  width={471}
                  height={425}
                  className="relative w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
