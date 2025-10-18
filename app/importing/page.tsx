import React from "react";
import Image from "next/image";

export default function ImportingPage() {
  return (
    <div className="min-h-screen bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-8 leading-tight">
              Importing
            </h1>
            <div className="text-base md:text-lg text-primary leading-relaxed space-y-4">
              <p>
                If you are in need for best-quality chemicals and reagents from
                international market, you are at the right place. Instrochems
                licensed services are the major gateway towards importing
                premium chemicals, reagents and laboratory equipment, from
                various countries like Germany, US, India, China, South Korea
                and many more.
              </p>
              <p>
                With our global footprint, we can grant you key access to
                authentic chemicals and reagents that you cannot find within the
                local market of Pakistan. We are the long withstanding experts
                in fulfilling specialized chemical requirements for our clients.
              </p>
              <p>
                Hence, feel free to contact us and file your requests, and leave
                it on us to arrange for your chemical necessities.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/importing-service-photo.jpeg"
              alt="Importing Service"
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
