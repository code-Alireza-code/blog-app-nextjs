import Button from "@/ui/Button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "بلاگ اپ | خانه",
};

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        اپلیکیشن مدیریت بلاگ
      </h1>
      <div>
        <p className="text-center text-secondary-500 text-lg leading-loose">
          جایی که قراره بتونی یه اپلیکیشن بلاگ رو مدیریت کنی! بتونی بلاگ بسازی -
          کامنت بذاری و در پنلت همه اتفاقات رو رصد کنی
        </p>
        <div className="flex justify-center gap-x-8 w-full mt-10">
          <Button variant="outline">
            <Link href="/blogs">مطالعه بلاگ ها</Link>
          </Button>
          <Button variant="primary">
            <Link href="/profile">مدیریت بلاگ ها</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
