import { Suspense } from "react";
import SwiperImportantPlacesWrapper from "./important places/SwiperImportantPlacesWrapper";

const ImportantPlaces = () => {
  return (
    <div className="important-places py-12 bg-primary/35" id="importantPlaces">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-secondary">
        أشهر الوجهات السياحية
      </h2>
      <div className="container mx-auto px-5">
        <Suspense
          fallback={
            <h4 className="text-2xl md:text-3xl text-center animate-pulse font-bold">
              جاري تحميل الأماكن...
            </h4>
          }
        >
          <SwiperImportantPlacesWrapper />
        </Suspense>
      </div>
    </div>
  );
};

export default ImportantPlaces;
