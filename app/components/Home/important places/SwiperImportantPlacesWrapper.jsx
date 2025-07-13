import SwiperImportantPlaces from "./SwiperImportantPlaces";

const SwiperImportantPlacesWrapper = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const data = await fetch(`${baseUrl}/data/important-places.json`, {
    next: { revalidate: 60 },
  });
  const places = await data.json();
  return <SwiperImportantPlaces places={places} />;
};

export default SwiperImportantPlacesWrapper;
