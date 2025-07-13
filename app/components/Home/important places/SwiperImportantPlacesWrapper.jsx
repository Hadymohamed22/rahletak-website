import SwiperImportantPlaces from "./SwiperImportantPlaces";

const SwiperImportantPlacesWrapper = async () => {
  const res = await fetch(
    `https://api.myjson.online/v1/records/2fa93ce6-fe16-4f25-b979-fad445366601`,
    { next: { revalidate: 60 } }
  );
  const json = await res.json();
  const data = json.data ?? [];

  return <SwiperImportantPlaces places={data} />;
};

export default SwiperImportantPlacesWrapper;
