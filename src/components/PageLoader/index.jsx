import { LoaderCircleIcon } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="animate-spin min-h-screen flex justify-center items-center">
      <LoaderCircleIcon className="size-20 text-red-500" />
    </div>
  );
};

export default PageLoader;
