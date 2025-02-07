import Image from "next/image";
import { Button } from "../ui/button";

export const ContactUsSection = () => (
  <section className="relative ">
    <div className="p-10">
      <div className="max-w-4xl mx-auto bg-gray-700 bg-opacity-80 rounded-lg p-8 text-center text-white">
        <strong className="text-lg">
          The synergistic knowledge of SMT team in corrosion, advanced
          materials, coating technology and ecotoxicity enables the development
          of effective solutions for our client.
        </strong>
      </div>
    </div>
    <div className="text-center bg-white p-6 flex flex-col  md:flex-row items-center justify-center gap-10 md:gap-0">
      <div className="relative w-full md:w-[500px] h-[240px] md:h[400px]">
        <Image
          src="https://www.smallmatek.pt/wp-content/uploads/2016/01/DSC_0337-1024x680.jpg"
          fill
          alt="home resultados"
          className="md:object-cover"
        />
      </div>
      <div className="max-w-sm" id="contactUs">
        <h3 className="text-xl mb-4">We want to hear from you!</h3>
        <p className="mb-6">
          Give us your suggestion or question and we will contact you shortly!
        </p>
        <Button variant="outline" size="lg" className="uppercase">
          Contact Us
        </Button>
      </div>
    </div>
  </section>
);
