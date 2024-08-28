// import Header from "./header";
// import Footer from "./footer";
import { Poppins } from "next/font/google";
import "../globals.css"
import MobileHeader from "@/components/mobileHeader";
import SideBar from "@/components/sidebar";

// Import the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${poppins.className} h-full`}>
      {/* <Header /> */}
      <MobileHeader />
      <div className="hidden lg:flex">
      <SideBar />
      </div>
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="bg-red-500 h-full">{children}</div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
