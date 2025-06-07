import { Metadata } from "next";
import HomePageButtons from "./_compoenents/HomePageButtons";
import Header from "@/ui/Header";

export const metadata: Metadata = {
  title: "بلاگ اپ | خانه",
};

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        اپلیکیشن مدیریت بلاگ
      </h1>
      <div>
        <p className="text-center text-secondary-500 text-lg leading-loose">
          جایی که قراره بتونی یه اپلیکیشن بلاگ رو مدیریت کنی! بتونی بلاگ بسازی -
          کامنت بذاری و در پنلت همه اتفاقات رو رصد کنی
        </p>
        <HomePageButtons />
      </div>
    </div>
  );
}
