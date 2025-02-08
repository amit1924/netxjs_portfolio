// import { UserProvider } from "@auth0/nextjs-auth0/client"; // ✅ Correct import
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <UserProvider>{children}</UserProvider>
//       </body>
//     </html>
//   );
// }
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Inter, Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

// Primary Font (Modern & Professional)
const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"], // Added 900 for extra bold
  display: "swap",
});

// Secondary Font (Elegant Headlines)
const playfair = Playfair_Display({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"], // Added 900 for bold headlines
  display: "swap",
});

// Tertiary Font (Clean UI Elements)
const raleway = Raleway({
  variable: "--font-tertiary",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${raleway.variable} antialiased`}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
