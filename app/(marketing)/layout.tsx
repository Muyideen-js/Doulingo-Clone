import Header from "./header";
import Footer from "./footer";
import { Poppins } from "next/font/google";

// Import the Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], 
  style: ['normal', 'italic'], 
  variable: '--font-poppins', 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${poppins.className} min-h-screen flex flex-col`}>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">{children}</main>
      <Footer />
    </div>  

  );
}
