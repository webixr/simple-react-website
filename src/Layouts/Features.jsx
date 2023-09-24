import {
  FaEarthAmericas,
  FaSketch,
  FaWandMagicSparkles,
} from "react-icons/fa6";
const Features = () => {
  const featuresData = [
    {
      icon: (
        <FaWandMagicSparkles className="text-5xl text-[var(--primary-color)]" />
      ),
      title: "Tell Us Your Idea",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab`,
    },
    {
      icon: <FaSketch className="text-5xl text-[var(--primary-color)]" />,
      title: "Tell Us Your Idea",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab`,
    },
    {
      icon: (
        <FaEarthAmericas className="text-5xl text-[var(--primary-color)]" />
      ),
      title: "Tell Us Your Idea",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab`,
    },
  ];
  return (
    <div className="w-full h-max bg-[var(--section-background)] relative z-50">
      <div className="container mx-auto px-2 py-[var(--section-padding)] w-full h-full flex max-md:flex-col items-center justify-between gap-4">
        {featuresData.map(({ icon, title, desc }, ind) => {
          return (
            <div
              key={ind}
              className="flex flex-col items-center text-center justify-between gap-7"
            >
              {icon}
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-lg font-normal text-[var(--dark-light-color)]">
                {desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
