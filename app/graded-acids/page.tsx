import React from "react";
import Image from "next/image";

export default function GradedAcidsPage() {
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
            🧪 Laboratory Grade
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Lab Graded
            <span className="block bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
              Acids
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
                    At Zona scientific we provide a diverse range of
                    high-quality chemical acids, each carefully formulated to
                    meet the needs of various industrial applications. Our
                    selection includes Sulfuric Acid, a powerful acid commonly
                    used in fertilizer production, mineral processing, and
                    battery manufacturing due to its reactivity and high
                    corrosive properties.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white font-bold">H₂SO₄</span>
                    </div>
                    <h4 className="font-bold text-primary mb-2">
                      Sulfuric Acid
                    </h4>
                    <p className="text-xs text-gray-600">
                      Fertilizers, minerals, batteries
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white font-bold">HCl</span>
                    </div>
                    <h4 className="font-bold text-primary mb-2">
                      Hydrochloric
                    </h4>
                    <p className="text-xs text-gray-600">
                      pH regulation, water treatment
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white font-bold">HNO₃</span>
                    </div>
                    <h4 className="font-bold text-primary mb-2">Nitric Acid</h4>
                    <p className="text-xs text-gray-600">
                      Explosives, fertilizers, dyes
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white font-bold">CH₃</span>
                    </div>
                    <h4 className="font-bold text-primary mb-2">Acetic Acid</h4>
                    <p className="text-xs text-gray-600">
                      Food processing, pharmaceuticals
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
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Phosphoric Acid serves vital roles in the agriculture
                      sector as a primary ingredient in fertilizers, as well as
                      in the food industry as an acidity regulator.
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
                      Each acid is available in various grades and
                      concentrations to meet specific industrial requirements,
                      ensuring optimal performance and adherence to regulatory
                      standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-primary rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity"></div>
                <Image
                  src="/lab-graded-acids-image.png"
                  alt="Lab Graded Acids"
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
