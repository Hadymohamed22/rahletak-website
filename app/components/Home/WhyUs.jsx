import { advantages } from "@/app/constants/Advantages";
import AdvanBox from "../AdvanBox";

const WhyUs = () => {
  return (
    <section className="why-us my-12" id="WhyUs">
      <div className="section-title mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
          لماذا تختار رحلتك ؟
        </h2>
        <p className="text-sm md:text-base text-para w-[90%] md:w-[85%] lg:w-[80%] mx-auto text-center">
          نحن نؤمن أن كل رحلة تبدأ بخطوة، وفي{" "}
          <span className="text-primary">"رحلتك"</span> نضمن لك أن تكون هذه
          الخطوة واثقة وسهلة.
        </p>
      </div>
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {advantages.map((e) => {
          return (
            <AdvanBox
              icon={e.icon}
              title={e.title}
              p={e.description}
              key={e.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
