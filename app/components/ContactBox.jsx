import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const ContactBox = ({ icon, text }) => {
  const icons = {
    location: <FaLocationDot />,
    mail: <IoMdMail />,
    tele: <BsFillTelephoneFill />,
  };
  return (
    <div className="contact-box flex items-center gap-2 text-sm min-w-[145px] md:min-w-0">
      <span className="icon text-secondary">{icons[icon]}</span>
      <span className="info text-primary">{text}</span>
    </div>
  );
};

export default ContactBox;
