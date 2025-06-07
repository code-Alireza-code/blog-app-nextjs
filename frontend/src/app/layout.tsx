import type { Metadata } from "next";
import "@/styles/globals.css";
import vazirFont from "@/constants/localFont";
import Providers from "@/providers/Providers";

export const metadata: Metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`antialiased ${vazirFont.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
