import { ReactNode } from "react";
import Sidebar from "./profile/_components/Sidebar";
import { Metadata } from "next";
import Header from "./profile/_components/Header";

export const metadata: Metadata = {
  title: "پروفایل",
  description: "پروفایل",
};

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-secondary-0">
      <div className="grid grid-cols-12 h-screen">
        <aside className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block ">
          <Sidebar />
        </aside>
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
          <Header />
          <main className="bg-secondary-100 rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
            <div className="xl:max-w-screen-xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default layout;
