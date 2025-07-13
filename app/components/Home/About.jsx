import Image from "next/image";
import verticalImage1 from "@/public/assets/images/vertical-image1.png";
import verticalImage2 from "@/public/assets/images/vertical-image2.png";
import horizontalImage1 from "@/public/assets/images/horizental-image1.png";
import horizontalImage2 from "@/public/assets/images/horizental-image2.png";

const About = () => {
  return (
    <section className="about my-12" id="About">
      <div className="container px-5 mx-auto">
        <h4 className="text-primary font-bold text-2xl md:text-3xl text-center mb-2">
          ليه تستخدم رحلتك؟
        </h4>
        <p className="text-sm md:text-base text-center mx-auto w-[85%] md:w-[75%]">
          رحلتك هو دليلك الشامل لاكتشاف أجمل وأشهر الأماكن السياحية في مصر
          بطريقة سهلة وممتعة. نوفر لك معلومات موثوقة، صور حقيقية، وتجارب مميزة
          تساعدك في اختيار رحلتك القادمة بثقة. سواء كنت بتحب التاريخ، المغامرة،
          الطبيعة أو البحر – هنا هتلاقي وجهتك المثالية.
        </p>
        <div className="gallery grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
          <div className="col relative h-[450px] md:h-[492px] overflow-hidden group">
            <Image
              src={verticalImage1}
              fill
              alt="tourist place"
              placeholder="blur"
              className="brightness-90 duration-300 hover:rotate-3 hover:scale-110 hover:brightness-75 group-focus-within:rotate-3 group-focus-within:scale-110"
            />
          </div>
          <div className="col flex flex-col gap-3">
            <div className="relative h-[240px] overflow-hidden group">
              <Image
                src={horizontalImage1}
                fill
                alt="tourist place"
                placeholder="blur"
                className="brightness-90 duration-300 hover:rotate-3 hover:scale-110 hover:brightness-75 group-focus-within:rotate-3 group-focus-within:scale-110"
              />
            </div>
            <div className="relative h-[240px] overflow-hidden group">
              <Image
                src={horizontalImage2}
                fill
                alt="tourist place"
                placeholder="blur"
                className="brightness-90 duration-300 hover:rotate-3 hover:scale-110 hover:brightness-75 group-focus-within:rotate-3 group-focus-within:scale-110"
              />
            </div>
          </div>
          <div className="col relative h-[450px] md:h-[492px] overflow-hidden group">
            <Image
              src={verticalImage2}
              fill
              alt="tourist place"
              placeholder="blur"
              className="brightness-90 duration-300 hover:rotate-3 hover:scale-110 hover:brightness-75 group-focus-within:rotate-3 group-focus-within:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
