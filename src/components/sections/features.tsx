import Image from "next/image";

export const KeyFeatureSection = () => (
  <section className="bg-gray-50 relative py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Our key features are:
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {[
          "supply of functional additives with prolonged action",
          "co-development of protective systems with higher performance",
          "extension of service life of structures",
          "technology with low impact in ecosystems",
        ].map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <p className="text-gray-600">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const KeyFeatureImageSection = () => (
  <section className="bg-gray-50 relative flex justify-center pb-10">
    <div className="relative w-full md:w-auto px-4 md:px-0">
      <div className="relative w-full md:w-[500px] h-[500px]">
        <Image
          src="https://www.smallmatek.pt/wp-content/uploads/2015/08/home-resultados2.jpg"
          fill
          alt="Home resultados"
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  </section>
);
