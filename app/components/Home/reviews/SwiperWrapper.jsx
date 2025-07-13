import ReviewsSwiper from "./ReviewsSwiper";

const SwiperWrapper = async () => {
  const res = await fetch(
    "https://api.myjson.online/v1/records/6d469408-b5a8-4074-9eee-1a059ae75061",
    {
      next: { revalidate: 60 },
    }
  );
  const json = await res.json();
  const reviews = json.data ?? [];
  return <ReviewsSwiper reviews={reviews} />;
};

export default SwiperWrapper;
