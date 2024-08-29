import { Poppins } from "next/font/google";
import "../globals.css";
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
      <MobileHeader />
      <div className="hidden lg:flex">
        <SideBar />
      </div>
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] pt-6 mx-auto h-full">{children}</div>
      </main>
    </div>
  );
}
