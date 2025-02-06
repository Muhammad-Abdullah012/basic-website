import Image from "next/image";

export const CertificationsSection = () => (
  <section className="bg-gray-50 flex justify-center items-center gap-10 py-16">
    <div className="flex gap-10">
      <Image
        src="https://www.smallmatek.pt/wp-content/uploads/2018/04/Seal-of-Excellence-Imag-207x300.png"
        width={150}
        height={150}
        alt="Seal of Excellence"
      />
      <Image
        src="https://www.smallmatek.pt/wp-content/uploads/2018/04/DZ8MTrtWAAEe8qd-267x300.png"
        width={150}
        height={150}
        alt="Seal of Excellence 2"
      />
    </div>
    <div className="flex flex-col gap-10 justify-between w-[30%]">
      <p>Supported by</p>
      <Image
        src={
          "https://www.smallmatek.pt/wp-content/uploads/2019/03/RM-Logo_300px2-300x101.png"
        }
        width={300}
        height={101}
        alt="EIT RawMaterials"
      />
      <div className="flex justify-between gap-4">
        <div>
          <Image
            src="https://www.smallmatek.pt/wp-content/uploads/2019/03/flag_yellow_low1-300x201.jpg"
            width={100}
            height={100}
            alt="Flag"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[#757575] text-[9px]">
            This activity has received funding from the European Institute of
            Innovations and Technology (EIT), a body of the European Union,
            under the Horizon 2020, the EU Framework Programme for Research and
            Innovation
          </p>
        </div>
      </div>
    </div>
  </section>
);
