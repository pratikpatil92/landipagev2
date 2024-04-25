import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./../../public/assets/vendor/aos/aos.css"
import "./../../public/assets/vendor/bootstrap/css/bootstrap.min.css"
import "./../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "./../../public/assets/vendor/boxicons/css/boxicons.min.css"
import "./../../public/assets/vendor/glightbox/css/glightbox.min.css"
import "./../../public/assets/vendor/remixicon/remixicon.css"
import "./../../public/assets/vendor/swiper/swiper-bundle.min.css"
import "./../../public/assets/css/style.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dramastra",
  description: "New Vision on technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Script src="/assets/vendor/aos/aos.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/waypoints/noframework.waypoints.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/vendor/php-email-form/validate.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/js/main.js" strategy="beforeInteractive"></Script>
      </body>

    </html>
  );
}
