import Link from "next/link";
import ContactBox from "./ContactBox";

const Footer = () => {
  return (
    <footer className="pt-12">
      <div className="container mx-auto px-5">
        <div className="footer-title">
          <h4 className="text-primary text-center text-2xl md:text-3xl font-bold">
            رحلتك
          </h4>
          <p className="text-para text-center px-5 text-sm md:text-base">
            بوابتك لاكتشاف أفضل الوجهات السياحية في مصر بطريقة سهلة وممتعة
          </p>
        </div>
        <ul className="important-links flex items-center justify-center gap-y-2 gap-x-5 my-5 flex-wrap">
          <li>
            <Link
              href="/"
              className="text-sm md:text-base duration-300 hover:text-primary text-secondary min-w-[90px] md:min-w-0 text-center"
            >
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm md:text-base duration-300 hover:text-primary text-secondary min-w-[90px] md:min-w-0 text-center"
            >
              من نحن
            </Link>
          </li>
          <li>
            <a
              href="/#importantPlaces"
              className="text-sm md:text-base duration-300 hover:text-primary text-secondary min-w-[90px] md:min-w-0 text-center"
            >
              أشهر الوجهات
            </a>
          </li>
          <li>
            <a
              href="/#WhyUs"
              className="text-sm md:text-base duration-300 hover:text-primary text-secondary min-w-[90px] md:min-w-0 text-center"
            >
              لماذا رحلتك؟
            </a>
          </li>
          <li>
            <a
              href="/#Reviews"
              className="text-sm md:text-base duration-300 hover:text-primary text-secondary min-w-[90px] md:min-w-0 text-center"
            >
              آراء الزوار
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <div className="container mx-auto px-5 flex items-center justify-center gap-x-5 gap-y-2 flex-wrap">
          <ContactBox icon="location" text="مصر،القاهرة" />
          <ContactBox icon="mail" text="support@rahltak.com" />
          <ContactBox icon="tele" text="01029379363" />
        </div>
      </div>
      <div className="copyright text-para">
        <div className="container mx-auto px-5 flex justify-center gap-1 py-5 border-t border-primary mt-5">
          التصميم والكود بواسطة{" "}
          <a
            className="underline font-bold duration-300 text-secondary hover:text-primary"
            href="https://www.linkedin.com/in/hady-elnifali/"
            target="_blank"
          >
            هادي محمد
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
