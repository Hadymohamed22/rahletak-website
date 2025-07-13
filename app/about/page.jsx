import Image from "next/image";
import verticalImage1 from "@/public/assets/images/vertical-image1.png";
import verticalImage2 from "@/public/assets/images/vertical-image2.png";
import horizontalImage1 from "@/public/assets/images/horizental-image1.png";
import horizontalImage2 from "@/public/assets/images/horizental-image2.png";
import styles from "./primaryShadow.module.scss";
import AboutMessageBox from "../components/AboutMessageBox";

export const metadata = {
  title: "من نحن | رحلتك",
  description:
    "تعرف على أهداف وقيم فريق رحلتك، وكيف نساعدك في الاستمتاع بتجربة سفر فريدة داخل مصر.",
  openGraph: {
    title: "من نحن | تعرف على فريق رحلتك",
    description:
      "نحن في رحلتك نعمل على تقديم تجربة سفر مبسطة وممتعة من خلال توفير دليل شامل لأشهر الوجهات السياحية.",
    type: "website",
    locale: "ar_EG",
  },
};

const page = () => {
  return (
    <div className="about-page">
      <div className="hero h-[50vh] bg-gradient-to-r from-primary/85 via-primary/0 to-primary/85 flex justify-center items-center">
        <h2 className="text-secondary font-bold text-3xl md:text-4xl lg:text-5xl">
          من نحن
        </h2>
      </div>
      <section className="about my-12" id="About">
        <div className="container px-5 mx-auto">
          <h4 className="text-primary font-bold text-2xl md:text-3xl text-center mb-2">
            من نحن
          </h4>
          <p className="text-sm md:text-base text-center mx-auto w-[85%] md:w-[75%] text-para">
            <span className="text-primary">"رحلتك"</span> هي منصتك الموثوقة
            لتخطيط واستكشاف أفضل الوجهات السياحية في مصر. نهدف إلى تسهيل تجربة
            السفر لكل من يبحث عن رحلة ممتعة، منظمة، ومليئة بالذكريات
          </p>
          <div className="about-messages">
            <div
              className={`${styles.primaryShadow} container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-7`}
            >
              <AboutMessageBox
                title="رؤيتنا"
                subTitle="أن نكون الخيار الأول للمسافرين داخل مصر، من خلال تقديم محتوى غني، أدوات ذكية، وتجربة استخدام سلسة تساعدهم على اكتشاف أماكن جديدة بكل سهولة.
"
                icon="target"
                className="vision"
              />
              <AboutMessageBox
                title="رسالتنا"
                subTitle="نحن نؤمن أن السفر لا يجب أن يكون معقدًا. لذلك، نقدم كل ما يحتاجه المسافر من معلومات، ترشيحات، وتفاصيل عملية، في مكان واحد.
"
                icon="mail"
                className="message"
              />
              <AboutMessageBox
                title="كيف بدأنا"
                subTitle={`لأننا شعرنا أن المحتوى العربي يفتقد لمنصة بسيطة ومباشرة تخدم المسافرين داخل مصر. فقررنا إطلاق "رحلتك" لتكون الدليل الأمثل لاختيار وجهتك التالية.
`}
                icon="grow"
                className="how-build"
              />
              <AboutMessageBox
                title="قيمنا"
                subTitle={`نحرص في "رحلتك" على تقديم تجربة تعتمد على الشفافية في المعلومات، والاهتمام بأدق التفاصيل، مع واجهة استخدام بسيطة وسلسة تناسب الجميع. كما نؤمن بأهمية دعم المحتوى العربي وتقديمه بجودة عالية تليق بالمستخدم العربي.
`}
                icon="star"
                className="values"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="gallary mt-12">
        <h4 className="text-primary font-bold text-2xl md:text-3xl text-center mb-2">
          معرض رحلتك
        </h4>
        <div className="gallery-container grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
          <div className="col relative h-[450px] md:h-[492px] overflow-hidden">
            <Image
              src={verticalImage1}
              fill
              alt="tourist place"
              placeholder="blur"
              className="brightness-90 duration-300 hover:rotate-3 hover:scale-110 hover:brightness-75"
            />
          </div>
          <div className="col flex flex-col gap-3">
            <div className="relative h-[240px] overflow-hidden">
              <Image
                src={horizontalImage1}
                fill
                alt="tourist place"
                placeholder="blur"
                className="brightness-90 duration-300 hover:rotate-3 hover:scale-110 hover:brightness-75"
              />
            </div>
            <div className="relative h-[240px] overflow-hidden">
              <Image
                src={horizontalImage2}
                fill
                alt="tourist place"
                placeholder="blur"
                className="brightness-90 duration-300 hover:rotate-3 hover:scale-110 hover:brightness-75"
              />
            </div>
          </div>
          <div className="col relative h-[450px] md:h-[492px] overflow-hidden">
            <Image
              src={verticalImage2}
              fill
              alt="tourist place"
              placeholder="blur"
              className="brightness-90 duration-300 hover:rotate-3 hover:scale-110 hover:brightness-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
