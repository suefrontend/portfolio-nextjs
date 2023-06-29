import "@styles/globals.css";
import { Lusitana } from "@next/font/google";
import Script from "next/script";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export const metadata = {
  title: "Kayano Oyama | Frontend Developer",
  description:
    "Hello! I'm Kayano Oyama, a frontend developer based in Vancouver. If you need an UI developer / frontend developer in Vancouver, please hire me!",
};

const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
        </Script>
      </head>

      <body>
        <div className={lusitana.className}>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
