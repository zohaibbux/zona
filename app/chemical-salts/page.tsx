import React from "react";
import Image from "next/image";

export default function ChemicalSaltsPage() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-8 leading-tight">
              Chemical Salts
            </h1>
            <div className="text-base md:text-lg text-primary leading-relaxed space-y-4">
              <p>
                Our product line features a diverse range of chemical salts
                engineered to support various industrial applications with the
                highest level of reliability and performance. We offer
                Industrial Salts that are essential in processes such as water
                treatment, deicing, and chemical manufacturing, each carefully
                refined to ensure consistency and effectiveness.
              </p>
              <p>
                Our Food-Grade Salts are crafted to meet stringent safety and
                purity standards, making them ideal for use in food processing,
                preservation, and flavoring applications. For the Pharmaceutical
                sector, we supply pharmaceutical grade salts that adhere to
                strict regulatory standards, ensuring safety and purity for use
                in medicinal formulations and healthcare products.
              </p>
              <p>
                In Agriculture, our salts contribute to better crop yields, soil
                health, and animal nutrition, helping to optimize productivity
                and sustainability in farming. Additionally, our Specialty Salts
                are customizable to meet unique, high precision requirements in
                specialized applications, allowing us to serve a wide array of
                industrial demands.
              </p>
              <p>
                Each of our products is formulated to provide optimal
                performance, backed by rigorous quality control to ensure
                purity, consistency, and reliability.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/chemical-salts-image.png"
              alt="Chemical Salts"
              width={471}
              height={425}
              className="w-full h-auto rounded-[41px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
