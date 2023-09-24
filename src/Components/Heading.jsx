const Heading = ({ link, heading, subHeading }) => {
  return (
    <div id={link} className="w-full text-center">
      <h2 className="text-[100px] max-sm:text-[72px] tracking-[-3px] font-extrabold text-[#ebeced] capitalize">
        {heading}
      </h2>
      <p className="text-xl text-[#797979] -mt-12 max-sm:-mt-10">{subHeading}</p>
    </div>
  );
};

export default Heading;
