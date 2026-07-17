import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Whatsapp from "@/components/Whatsapp";
import { Toaster } from "react-hot-toast";

// Roboto
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "MS Pipe, GI Sheet, GP Sheet & Cable Tray Supplier | Shiva Steel Fabricator",
  description: "Shiva Steel Fabricator is a trusted supplier of MS Pipe, MS Plate, MS Angle, MS Beam, MS Channel, GI Sheet, GP Sheet, Cable Tray, Perforated Cable Tray, Boiler Plates, Heavy Plates, and Chequered Plates. Quality products, competitive prices, and timely delivery.",
  icons: {
    icon: "/logo.webp",
    shortcut:  "/logo.webp",
    apple:  "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        {/* Toast Container */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={10}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#fff",
              color: "#FC2B17",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "14px 16px",
              fontSize: "14px",
              fontWeight: "500",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.12)",
            },
            success: {
              iconTheme: {
                primary: "#16a34a",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#dc2626",
                secondary: "#fff",
              },
            },
          }}
        />

        <Whatsapp />

        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}