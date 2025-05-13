import Spinner from "@/ui/Spinner";

function loading() {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <span className="text-lg text-secondary-600">در حال بارگذاری پست ها</span>
      <Spinner />
    </div>
  );
}

export default loading;
