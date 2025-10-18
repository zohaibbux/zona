import React from "react";
import Image from "next/image";

export default function LabEquipmentsPage() {
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
            🔬 Precision Tools
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Lab
            <span className="block bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
              Equipments
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
                    At Zona Sceintific, we distribute a comprehensive range of
                    high-quality laboratory scientific equipment, sourced from
                    trusted manufacturers to meet the diverse needs of research,
                    quality control, and analytical testing across industries.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-sm">
                      1
                    </span>
                    Essential Instruments
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Our offerings include Microscopes for cellular and molecular
                    analysis, Centrifuges for efficient density-based sample
                    separation, and Analytical Balances for precise
                    measurements, essential for accurate sample preparation in
                    research and industrial labs. We also provide pH Meters for
                    accurate pH testing in environmental science, food, and
                    chemical industries.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-sm">
                      2
                    </span>
                    Advanced Analytics
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    For advanced analytical applications, we supply HPLC Columns
                    (High-Performance Liquid Chromatography) in various sizes
                    and materials, essential for separating, identifying, and
                    quantifying compounds in complex samples within the
                    pharmaceutical, chemical, and food sectors. Our
                    Spectrophotometers allow precise quantification and
                    monitoring of samples, enhancing the analytical capabilities
                    of laboratories.
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Every item in our distribution lineup is selected for
                      durability, accuracy, and compliance with international
                      quality standards, enabling scientists and technicians to
                      perform with confidence and consistency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-primary rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity"></div>
                <Image
                  src="/lab-equipment-showcase.png"
                  alt="Lab Equipment"
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
