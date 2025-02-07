// import Image from "next/image";
import Image from "next/image";

import iphone from "../../public/iphone_call.gif";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CertificationsSection } from "@/components/sections/certifications";
import { DetailSection, OverviewSection } from "@/components/sections/overview";
import {
  KeyFeatureImageSection,
  KeyFeatureSection,
} from "@/components/sections/features";
import { ProductAndServiceSection } from "@/components/sections/productAndServices";
import { ContactUsSection } from "@/components/sections/contactUs";

export default function Home() {
  return (
    <div className="text-[#757575]">
      <header className="relative h-96">
        <Navbar />

        <Image
          src={iphone}
          unoptimized
          alt="Animated Cube"
          className="absolute top-0 left-0 w-full h-96 object-cover"
        />
      </header>

      <div>
        <CertificationsSection />

        <OverviewSection />

        <DetailSection />

        <KeyFeatureSection />

        <KeyFeatureImageSection />

        <ProductAndServiceSection />
      </div>
      <div className="relative md:min-h-[85vh]">
        {/* Background Image */}
        <Image
          src={iphone}
          unoptimized
          alt="Animated Cube"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Content */}
        <div className="relative z-10">
          <ContactUsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
