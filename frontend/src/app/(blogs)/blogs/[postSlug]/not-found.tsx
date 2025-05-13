"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

function NotFound() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              هیچ پستی با این مشخصات یافت نشد !
            </h1>
            <Link
              href="/blogs"
              className="flex items-center gap-x-2 text-secondary-500"
            >
              <HiArrowRight className="w-6 h-6 text-primary-900" />
              <span>رفتن به صفحه پست ها</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
