import Image from "next/image";
import Link from "next/link";

const SwiperItem = ({ place }) => {
  return (
    <div className="swiper-item h-[400px] flex items-end relative overflow-hidden group">
      <div className="background absolute inset-0 w-full h-full overflow-hidden rounded-xl">
        <Image
          src={place.image}
          alt={place.name}
          fill
          className="object-cover brightness-50 duration-500 group-hover:rotate-2 group-hover:scale-110"
        />
      </div>
      <div className="content relative z-10 px-2 bottom-[-50px] duration-500 ease-[cubic-bezier(0.78,_0,_0.22,_1)] group-hover:bottom-[10px]">
        <h5 className="text-xl md:text-2xl font-bold text-white">
          {place.name}
        </h5>
        <p className="text-xs md:text-sm text-gray-300">{place.description}</p>
        <Link
          href={`places/${place.slug}`}
          className="block w-fit py-2 px-6 rounded-lg mt-5 bg-primary/85 border-2 border-white text-white duration-300 hover:bg-white/85 hover:border-primary hover:text-primary text-base md:text-lg"
        >
          إعرف المزيد
        </Link>
      </div>
    </div>
  );
};

export default SwiperItem;
