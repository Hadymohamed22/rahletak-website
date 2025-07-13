import { GrGrow } from "react-icons/gr";
import { IoMail } from "react-icons/io5";
import { PiShootingStarFill } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";

const AboutMessageBox = ({ className, title, subTitle, icon }) => {
  const icons = {
    target: <TbTargetArrow className="text-secondary" />,
    mail: <IoMail className="text-primary" />,
    grow: <GrGrow className="text-secondary" />,
    star: <PiShootingStarFill className="text-primary" />,
  };
  return (
    <div className={`${className} p-5 bg-gray-100 rounded-2xl`}>
      <div className="title flex gap-2 items-center mb-3">
        <span className="icon text-3xl md:text-4xl">{icons[icon]}</span>
        <h5 className="title-text text-xl md:text-2xl font-bold">{title}</h5>
      </div>
      <p className="text-sm text-para">{subTitle}</p>
    </div>
  );
};

export default AboutMessageBox;
