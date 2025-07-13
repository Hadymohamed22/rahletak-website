import LocalFont from "next/font/local";

export const MyFonts = LocalFont({
  src: [
    {
      path: "./Cairo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Cairo-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Cairo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Cairo-Black.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});
