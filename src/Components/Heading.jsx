const Heading = ({ link, heading, subHeading }) => {
  return (
    <div id={link} className="w-full text-center">
      <h1 className="text-8xl max-sm:text-6xl font-bold text-gray-300 uppercase">
        {heading}
      </h1>
      <p className="text-lg text-[#797979] -mt-5">{subHeading}</p>
    </div>
  );
};

export default Heading;
