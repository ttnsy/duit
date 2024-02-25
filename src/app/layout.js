import { Roboto_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Duit",
  description: "Budgeting & spend tracker app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
