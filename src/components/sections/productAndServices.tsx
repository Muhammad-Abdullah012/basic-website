import { Lightbulb, Settings2, Leaf, Search } from "lucide-react";

export const ProductAndServiceSection = () => (
  <section className="relative py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Products & Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
            <Lightbulb className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="font-semibold mb-2">Customized solutions</h3>
          <p className="text-sm text-gray-600">
            Development of customized &quot;smart&quot; micro and nanocontainers
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
            <Settings2 className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="font-semibold mb-2">Production</h3>
          <p className="text-sm text-gray-600">
            Production of micro- and nanocontainers for controlled release of
            active species
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
            <Leaf className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="font-semibold mb-2">
            Ecotoxicity & Environmental monitoring
          </h3>
          <p className="text-sm text-gray-600">
            Assessment of the impact of SMT materials and their active compounds
            on marine fresh
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
            <Search className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="font-semibold mb-2">Consultancy & Other Services</h3>
          <p className="text-sm text-gray-600">
            Corrosion studies on simulated service conditions, Laboratory
            analyses and tests
          </p>
        </div>
      </div>
    </div>
  </section>
);
