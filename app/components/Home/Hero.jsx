import Link from "next/link";
import styles from "./hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className={`${styles.hero} hero overflow-hidden h-[90vh] flex flex-col items-center justify-center relative before:absolute before:inset-0 before:bg-black/45 before:z-0`}
    >
      <div className="content relative z-10">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center mb-5">
          اكتشف أجمل الأماكن السياحية في مصر
        </h1>
        <p className="text-center w-[90%] md:w-[75%] mx-auto text-gray-300 text-sm md:text-base">
          استعد لاكتشاف أجمل الأماكن السياحية في مصر مع دليل شامل يغطي أهم
          المعالم التاريخية والطبيعية والثقافية، ويقدم معلومات دقيقة وصور عالية
          الجودة تساعدك على التخطيط لرحلتك المثالية بكل سهولة ووضوح وإلهام
        </p>
        <a
          href="/#About"
          role="button"
          aria-label="about us button"
          className="mx-auto block w-fit py-2 px-6 rounded-full mt-5 bg-primary/85 border-2 border-white text-white duration-300 hover:bg-white hover:border-primary hover:text-primary text-base md:text-lg"
        >
          ابدأ الاستكشاف
        </a>
      </div>
      <div className="divider-wave h-[40px] md:h-[45px] w-[150%] md:w-full absolute left-0 bottom-[-2px] z-[1]">
        <Image
          src="/assets/images/divider-hero.png"
          alt="hero divider wave"
          fill
          priority
          className="absolute bottom-0 left-0 z-[1]"
        />
      </div>
    </div>
  );
};

export default Hero;
