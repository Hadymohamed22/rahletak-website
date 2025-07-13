import SwiperWrapper from "./reviews/SwiperWrapper";

const Reviews = () => {
  return (
    <section className="reviews py-12 bg-primary/25" id="Reviews">
      <div className="section-title mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary">
          آراء عملائنا
        </h2>
        <p className="text-gray-500 w-[90%] md:w-[85%] lg:w-[80%] mx-auto text-center">
          اكتشف ماذا يقول الآخرون عن تجربتهم مع{" "}
          <span className="text-secondary">"رحلتك"</span> ودع كلماتهم تقنعك
          بالخطوة القادمة.
        </p>
      </div>
      <div className="container mx-auto px-5">
        <SwiperWrapper />
      </div>
    </section>
  );
};

export default Reviews;
