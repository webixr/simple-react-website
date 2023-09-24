import Heading from "./Heading";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const Portfolio = () => {
  const ProjectsData = [
    {
      img: "https://elzerowebschool.github.io/HTML_And_CSS_Template_One/images/portfolio-1.jpg",
      title: "project name",
      slug: "project-name",
      desc: `My creative ability is very difficult to measure because it can manifest in so many surprising and.`,
    },
    {
      img: "",
      title: "project name",
      slug: "project-name",
      desc: `My creative ability is very difficult to measure because it can manifest in so many surprising and.`,
    },
    {
      img: "https://elzerowebschool.github.io/HTML_And_CSS_Template_One/images/portfolio-1.jpg",
      title: "project name",
      slug: "project-name",
      desc: `My creative ability is very difficult to measure because it can manifest in so many surprising and.`,
    },
  ];
  return (
    <div className="w-full h-max bg-[#f6f6f6] relative z-50">
      <div className="container mx-auto px-2 py-16 w-full h-full flex flex-col items-center justify-between gap-24">
        {/* heading */}
        <Heading
          link={"Portfolio"}
          heading={"Portfolio"}
          subHeading={"If you do it right, it will last forever."}
        />
        {/* content */}
        <div className="w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-content justify-between gap-8">
          {ProjectsData.map(({ img, title, slug, desc }, ind) => {
            return (
              <div key={ind} className="w-full bg-white">
                {/* image */}
                <img
                  src={img}
                  alt={`(${title} image)`}
                  className="w-full h-[240px] object-cover bg-gray-200"
                />
                <div className="p-5">
                  <Link
                    to={`projects/${slug}`}
                    className="group w-full mb-3 flex items-center justify-between"
                  >
                    <h3 className="text-lg font-bold group-hover:underline capitalize">
                      {title}
                    </h3>
                    <FaArrowUpRightFromSquare className="group-hover:scale-110 duration-200" />
                  </Link>
                  <p className="text-[#777] text-base font-light">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
