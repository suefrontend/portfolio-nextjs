import "@styles/globals.css";
import { Lusitana } from "@next/font/google";

export const metadata = {
  title: "Kayano Oyama Portfolio",
  description: "Kayano Oyama Portfolio",
};

const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className={lusitana.className}>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
