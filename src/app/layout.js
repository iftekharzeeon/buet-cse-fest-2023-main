import "./globals.scss";
import CustomNavbar from "@/components/CustomNavbar";
import { Ubuntu } from "next/font/google";
import Footer from "@/components/footer";

const inter = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "BUET CSE Fest 2023",
  description: "BUET CSE Fest 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <CustomNavbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
