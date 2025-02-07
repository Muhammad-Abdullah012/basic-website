import Image from "next/image";

export const OverviewSection = () => (
  <section className="bg-gray-50 relative py-8 md:py-16 flex justify-center">
    <div className="container max-w-4xl px-4">
      <p className="leading-relaxed text-xl md:text-3xl text-center">
        Smallimatek is an innovation-driven company that offers integrated
        solutions for protection of metal structures against corrosion and
        biofouling failure, combining the supply of cost-effective and
        eco-efficient &quot;smart&quot; additives and expert consulting
        services.
      </p>
    </div>
  </section>
);

export const DetailSection = () => (
  <>
    <section className="bg-gray-50 relative py-16 flex justify-center">
      <div className="container max-w-4xl px-4">
        <p className="leading-relaxed text-base md:text-xl text-center text-justify">
          SMT provides a full range of customized products and services in the
          area of transportation and construction industries, among the best
          integrated solutions for protection against corrosion and biofouling:
          high-value &quot;smart&quot;-responsive additives for protective
          paints and admixtures; consulting services on the co-development of
          surface treatments and coatings; advanced laboratory analysis for
          corrosion diagnosis and monitoring; ecotoxicity and environmental
          monitoring of different compounds and materials.
        </p>
      </div>
    </section>
    <section className="bg-gray-50 flex relative justify-center pb-4 md:pb-10">
      <div className="relative w-full md:w-auto px-4 md:px-0">
        <div className="relative w-full md:w-[800px] h-[100px] md:h-[300px]">
          <Image
            src="https://www.smallmatek.pt/wp-content/uploads/2015/11/esquema-customized-solutions1.jpg"
            fill
            alt="Customized Solution"
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  </>
);
