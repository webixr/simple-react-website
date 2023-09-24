import { Heading } from "../Components";
import { FaPalette } from "react-icons/fa6";
import serviceImg from "../Assets/services-img.jpeg";
const Services = () => {
  const servicesData = [
    {
      icon: <FaPalette className="text-[32px] text-[var(--primary-color)]" />,
      title: "Graphic Design",
      desc: `Graphic design is the process of visual communication and
      problem-solving using one or more of typography, photography
      and illustration.`,
    },
    {
      icon: <FaPalette className="text-[32px] text-[var(--primary-color)]" />,
      title: "Graphic Design",
      desc: `Graphic design is the process of visual communication and
      problem-solving using one or more of typography, photography
      and illustration.`,
    },
    {
      icon: <FaPalette className="text-[32px] text-[var(--primary-color)]" />,
      title: "Graphic Design",
      desc: `Graphic design is the process of visual communication and
      problem-solving using one or more of typography, photography
      and illustration.`,
    },
    {
      icon: <FaPalette className="text-[32px] text-[var(--primary-color)]" />,
      title: "Graphic Design",
      desc: `Graphic design is the process of visual communication and
      problem-solving using one or more of typography, photography
      and illustration.`,
    },
  ];
  return (
    <div className="w-full h-max bg-white relative z-50">
      <div className="container mx-auto px-2 py-[var(--section-padding)] w-full h-full flex flex-col items-center justify-between gap-24">
        {/* heading */}
        <Heading
          link={"Services"}
          heading={"services"}
          subHeading={"don't be busy, by productive"}
        />
        {/* content */}
        <div className="w-full flex justify-between gap-7">
          {/* services */}
          <div className="max-sm:w-full grid grid-cols-2 max-sm:grid-cols-1 justify-content gap-14">
            {servicesData.map(({ icon, title, desc }, ind) => {
              return (
                <div
                  key={ind}
                  className="flex items-start max-sm:flex-col max-sm:items-center justify-between gap-8"
                >
                  {icon}
                  <div className="flex flex-col gap-3 max-sm:text-center">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-base font-light text-[var(--dark-color)] max-w-[18rem]">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* image */}
          <div className="w-[300px] h-[400px] relative max-md:hidden">
            <img
              src={serviceImg}
              className="w-[250px] h-[350px] object-cover"
            />
            <span className="block absolute top-[-11%] right-0 bg-[var(--secondary-color)] w-[100px] h-[445px] -z-10"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
