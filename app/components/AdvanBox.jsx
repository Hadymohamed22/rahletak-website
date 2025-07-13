import { IoLanguageSharp } from "react-icons/io5";
import { PiShootingStarBold } from "react-icons/pi";
import { GrUpdate } from "react-icons/gr";
import { TbTargetArrow } from "react-icons/tb";

const AdvanBox = ({ icon, title, p }) => {
  const icons = {
    target: <TbTargetArrow />,
    update: <GrUpdate />,
    simple: <PiShootingStarBold />,
    lang: <IoLanguageSharp />,
  };
  return (
    <div className="card bg-gray-50 shadow py-7 px-2 rounded-2xl duration-300 group hover:translate-y-[-5px] hover:bg-primary/85">
      <div className="icon w-fit mx-auto text-primary duration-300 group-hover:text-white text-2xl md:text-3xl">
        {icons[icon]}
      </div>
      <h5 className="text-lg md:text-xl font-bold text-secondary duration-300 group-hover:text-black mt-3 mb-1 text-center">
        {title}
      </h5>
      <p className="text-xs md:text-sm text-center w-[90%] md:w-[85%] mx-auto text-para duration-300 group-hover:text-gray-100">
        {p}
      </p>
    </div>
  );
};

export default AdvanBox;
