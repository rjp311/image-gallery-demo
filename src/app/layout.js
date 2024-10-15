import { ContentFont, TitleFont } from "@/styles/fonts";
import "../styles/global.scss";

export const metadata = {
  title: "Image Gallery",
  description: "An image gallery created as an interview task.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ContentFont.variable} ${TitleFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
