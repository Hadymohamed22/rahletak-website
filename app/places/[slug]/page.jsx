import Tag from "@/app/components/Tag";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/data/important-places.json`);
  const data = await res.json();
  return data.map((e) => ({
    slug: e.slug,
  }));
}

export async function generateMetadata({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/data/important-places.json`);
  const data = await res.json();
  const place = data.find((e) => e.slug === params.slug);

  if (!place) return {};

  return {
    title: `${place.name} | رحلتك`,
    description: place.description,
    openGraph: {
      title: `${place.name} | استكشف مع رحلتك`,
      description: place.details,
      images: [`${baseUrl}${place.image}`],
      type: "article",
      locale: "ar_EG",
    },
  };
}

const page = async ({ params }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/data/important-places.json`);
  const data = await res.json();
  const currentPlace = data.find((e) => e.slug === params.slug);
  if (!currentPlace) notFound();
  return (
    <div className={`${currentPlace.name}-place my-12`}>
      <div className="container mx-auto px-5">
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10">
          <div className="image-col col-span-1 md:col-span-2 lg:col-span-1 overflow-hidden h-[450px] rounded-2xl relative">
            <Image
              src={currentPlace.image}
              alt={`${currentPlace.slug} tourist place`}
              fill
              className="brightness-75"
              priority
            />
          </div>
          <div className="text-col col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-xl md:text-2xl font-bold text-secondary">
              الوجهة : <span className="text-primary">{currentPlace.name}</span>
            </h4>
            <p className="text-base md:text-lg text-secondary mt-2 w-[90%] md:w-[85%]">
              الوصف : <span className="text-para">{currentPlace.details}</span>
            </p>
            <p className="text-base md:text-lg text-secondary mt-1 w-[90%] md:w-[85%]">
              الموقع :{" "}
              <span className="text-para">{currentPlace.location}</span>
            </p>
            <p className="text-base md:text-lg text-secondary mt-1 w-[90%] md:w-[85%]">
              التقييم :{" "}
              <span className="text-para">5/{currentPlace.rating}⭐</span>
            </p>
            <a
              href={currentPlace.mapLink}
              target="_blank"
              role="button"
              aria-label=" button"
              className="block w-fit py-2 px-6 rounded-full mt-5 bg-primary/85 border-2 border-white text-white duration-300 hover:bg-white hover:border-primary hover:text-primary text-base md:text-lg"
            >
              شاهد الوجهة
            </a>
            <div className="tags flex items-center gap-3 mt-5">
              {currentPlace.tags.map((e) => (
                <Tag text={e} key={e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
