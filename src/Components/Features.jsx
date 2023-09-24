import {
  FaEarthAmericas,
  FaSketch,
  FaWandMagicSparkles,
} from "react-icons/fa6";
const Features = () => {
  return (
    <div className="w-full h-max bg-[#f6f6f6] relative z-50">
      <div className="container mx-auto px-2 py-14 w-full h-full flex max-md:flex-col items-center justify-between gap-4">
        <div className="flex flex-col items-center text-center justify-between gap-7">
          <FaWandMagicSparkles className="text-5xl text-[#10cab7]" />
          <h3 className="text-xl font-semibold">Tell Us Your Idea</h3>
          <p className="text-lg font-normal text-[#777]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut lab
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-between gap-7">
          <FaSketch className="text-5xl text-[#10cab7]" />
          <h3 className="text-xl font-semibold">Tell Us Your Idea</h3>
          <p className="text-lg font-normal text-[#777]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut lab
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-between gap-7">
          <FaEarthAmericas className="text-5xl text-[#10cab7]" />
          <h3 className="text-xl font-semibold">Tell Us Your Idea</h3>
          <p className="text-lg font-normal text-[#777]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut lab
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
