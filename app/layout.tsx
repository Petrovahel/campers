import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
