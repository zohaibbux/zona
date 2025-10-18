import React from "react";
import Image from "next/image";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-8 leading-tight">
              Shaping the Future of Discovery
            </h1>
            <div className="text-base md:text-lg text-primary leading-relaxed space-y-4">
              <p>
                At Zona Scientific, our mission is to empower scientific
                progress by bridging the gap between innovation and
                accessibility. We aim to equip researchers, educators,
                healthcare professionals, and industry leaders with the tools
                they need to drive discovery, solve complex challenges, and
                improve lives.
              </p>
              <p>
                By prioritizing quality, precision, and reliability, we ensure
                that our products serve as trusted companions in the pursuit of
                excellence. We believe that innovation should be inclusive and
                accessible, which is why we focus on delivering advanced
                scientific equipment to institutions of all sizes and
                disciplines.
              </p>
              <p>
                Our mission is rooted in the understanding that every scientific
                endeavor whether its a groundbreaking research study, a crucial
                healthcare diagnosis, or a quality assurance process in
                manufacturing deserves the best tools to achieve meaningful
                results. Through this dedication, we seek to contribute to a
                world where science can thrive, unencumbered by limitations.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/service-distributing-image.png"
              alt="Scientific Innovation"
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
