import {
  ChevronLeftIcon as OChevronLeftIcon,
  ChevronRightIcon as OChevronRightIcon,
} from "@heroicons/react/24/outline";

/** 2023/06/23 - Carousel Arrow Button 컴포넌트 - by 1-blue */
const Arrow: React.FC = () => {
  return (
    <>
      <OChevronLeftIcon
        role="button"
        data-type="prev"
        className="absolute left-1 top-1/2 -translate-y-1/2 w-8 lg:w-12 p-2 rounded-md stroke-[3px] transition-colors text-main-400 hover:text-main-100 hover:bg-sub-500"
      />
      <OChevronRightIcon
        role="button"
        data-type="next"
        className="absolute right-1 top-1/2 -translate-y-1/2 w-8 lg:w-12 p-2 rounded-md stroke-[3px] transition-colors text-main-400 hover:text-main-100 hover:bg-sub-500"
      />
    </>
  );
};

export default Arrow;
