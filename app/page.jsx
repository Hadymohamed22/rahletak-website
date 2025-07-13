import About from "./components/Home/About";
import Hero from "./components/Home/Hero";
import Reviews from "./components/Home/Reviews";
import WhyUs from "./components/Home/WhyUs";
import ImportantPlaces from "./components/Home/ImportantPlaces";

export const metadata = {
  title: "رحلتك | استكشف أفضل الوجهات السياحية في مصر",
  description:
    "موقع رحلتك يساعدك في التخطيط لرحلة سياحية مثالية داخل مصر من خلال استعراض أشهر الأماكن والمزارات والتجارب السياحية.",
  openGraph: {
    title: "رحلتك | دليلك السياحي لاكتشاف مصر",
    description:
      "ابدأ رحلتك الآن مع رحلتك - استكشف أجمل الأماكن في مصر مثل أسوان، دهب، مكتبة الإسكندرية وغيرها.",
    type: "website",
    locale: "ar_EG",
  },
};

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <About />
      <ImportantPlaces />
      <WhyUs />
      <Reviews />
    </main>
  );
}
