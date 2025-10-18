import React from "react";
import Image from "next/image";

export default function PromisePage() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-8 leading-tight">
              A Partner You Can Trust
            </h1>
            <div className="text-base md:text-lg text-primary leading-relaxed space-y-4">
              <p>
                At Zona Scientific, we are committed to delivering excellence
                through our unwavering promise of quality, expertise, support,
                and innovation. Every product in our portfolio is meticulously
                evaluated to meet rigorous industry standards, ensuring reliable
                performance even in the most challenging conditions.
              </p>
              <p>
                Beyond providing equipment, we pride ourselves on offering
                expert insights and tailored solutions to meet the unique needs
                of each client. Our dedicated team ensures consistent,
                responsive support, whether its answering product inquiries or
                delivering customized solutions.
              </p>
              <p>
                By staying ahead of scientific advancements, we continually
                update our product range to offer the latest tools and
                technologies. This commitment to precision, reliability, and
                service reflects our belief in empowering our clients success
                and contributing to the advancement of science.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/promise-partnership-image.png"
              alt="Scientific Partnership"
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
