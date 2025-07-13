import SwiperImportantPlaces from "./SwiperImportantPlaces";
import { promises as fs } from "fs";
import path from "path";

const SwiperImportantPlacesWrapper = async () => {
  const filePath = path.join(
    process.cwd(),
    "public/data/important-places.json"
  );
  const jsonData = await fs.readFile(filePath, "utf-8");
  const places = JSON.parse(jsonData);
  return <SwiperImportantPlaces places={places} />;
};

export default SwiperImportantPlacesWrapper;
