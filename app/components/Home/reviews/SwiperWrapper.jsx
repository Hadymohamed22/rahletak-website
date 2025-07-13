import ReviewsSwiper from "./ReviewsSwiper";

const SwiperWrapper = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const data = await fetch(`${baseUrl}/data/reviews.json`, {
    next: { revalidate: 60 },
  });
  const reviews = await data.json();
  return <ReviewsSwiper reviews={reviews} />;
};

export default SwiperWrapper;
