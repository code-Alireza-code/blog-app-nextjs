import Header from "@/ui/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "Blog",
  description: "Blogs",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="container xl:max-w-screen-xl">{children}</div>
    </>
  );
}
