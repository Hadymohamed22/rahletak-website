import "./styles/globals.css";
import { MyFonts } from "./fonts/MyFonts";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "رحلتك",
    template: "%s | رحلتك",
  },
  description:
    "اكتشف أجمل وأشهر الأماكن السياحية في مصر من خلال دليل تفاعلي يقدم لك معلومات وصور لكل موقع سياحي، بطريقة سهلة وسريعة.",
  openGraph: {
    title: "الدليل السياحي لمصر",
    description:
      "اكتشف أجمل الأماكن السياحية في مصر بمعلومات وصور عالية الجودة.",
    locale: "ar_EG",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`antialiased ${MyFonts.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
