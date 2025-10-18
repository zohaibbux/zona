import React from "react";
import Image from "next/image";

export default function LabEquipmentsPage() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-8 leading-tight">
              Lab Equipments
            </h1>
            <div className="text-base md:text-lg text-primary leading-relaxed space-y-4">
              <p>
                At Zona Sceintific, we distribute a comprehensive range of
                high-quality laboratory scientific equipment, sourced from
                trusted manufacturers to meet the diverse needs of research,
                quality control, and analytical testing across industries.
              </p>
              <p>
                Our offerings include Microscopes for cellular and molecular
                analysis, Centrifuges for efficient density-based sample
                separation, and Analytical Balances for precise measurements,
                essential for accurate sample preparation in research and
                industrial labs. We also provide pH Meters for accurate pH
                testing in environmental science, food, and chemical industries.
              </p>
              <p>
                For advanced analytical applications, we supply HPLC Columns
                (High-Performance Liquid Chromatography) in various sizes and
                materials, essential for separating, identifying, and
                quantifying compounds in complex samples within the
                pharmaceutical, chemical, and food sectors. Our
                Spectrophotometers allow precise quantification and monitoring
                of samples, enhancing the analytical capabilities of
                laboratories.
              </p>
              <p>
                Every item in our distribution lineup is selected for
                durability, accuracy, and compliance with international quality
                standards, enabling scientists and technicians to perform with
                confidence and consistency.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/lab-equipment-showcase.png"
              alt="Lab Equipment"
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
