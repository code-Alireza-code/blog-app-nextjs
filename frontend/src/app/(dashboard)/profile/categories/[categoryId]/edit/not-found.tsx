import Button from "@/ui/Button";
import Link from "next/link";
import { HiOutlineFaceFrown } from "react-icons/hi2";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-3 text-secondary-700">
      <HiOutlineFaceFrown className="size-20 text-secondary-400" />
      {/* <h2 className="text-xl font-semibold">
        صفحه ای که دنبالش بودید - پیدا نشد
      </h2> */}
      <p className="font-semibold text-lg">
        دسته بندی ای با این مشخصات پیدا نشد !
      </p>
      <Button className="text-white">
        <Link href="/profile/categories">برگشت</Link>
      </Button>
    </main>
  );
}
