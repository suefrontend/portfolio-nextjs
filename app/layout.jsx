import "@styles/globals.css";

export const metadata = {
  title: "Kayano Oyama Portfolio",
  description: "Kayano Oyama Portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
