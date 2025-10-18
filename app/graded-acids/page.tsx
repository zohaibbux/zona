import React from "react";
import Image from "next/image";

export default function GradedAcidsPage() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-8 leading-tight">
              Lab Graded Acids
            </h1>
            <div className="text-base md:text-lg text-primary leading-relaxed space-y-4">
              <p>
                At Zona scientific we provide a diverse range of high-quality
                chemical acids, each carefully formulated to meet the needs of
                various industrial applications. Our selection includes Sulfuric
                Acid, a powerful acid commonly used in fertilizer production,
                mineral processing, and battery manufacturing due to its
                reactivity and high corrosive properties.
              </p>
              <p>
                Hydrochloric Acid is another key product in our catalog, valued
                for its strong acidic nature, making it essential in pH
                regulation, water treatment, and steel production. For
                applications requiring strong oxidizing agents, we offer Nitric
                Acid, widely used in the manufacture of explosives, fertilizers,
                and dyes due to its role in nitration reactions.
              </p>
              <p>
                Acetic Acid is a versatile organic compound, employed in food
                processing, pharmaceuticals, and synthetic fiber production,
                known for its effectiveness as a solvent and preservative.
                Finally, our Phosphoric Acid serves vital roles in the
                agriculture sector as a primary ingredient in fertilizers, as
                well as in the food industry as an acidity regulator.
              </p>
              <p>
                Each acid is available in various grades and concentrations to
                meet specific industrial requirements, ensuring optimal
                performance and adherence to regulatory standards.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/lab-graded-acids-image.png"
              alt="Lab Graded Acids"
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
