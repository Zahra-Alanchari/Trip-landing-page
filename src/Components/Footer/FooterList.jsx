const FooterList = () => {
  return (
    <div className="flex flex-row gap-x-8 lg:gap-x-20 justify-start text-white  lg:text-[1.3rem]">
      <div className="flex flex-col items-center">
        <span>دسترسی سریع</span>
        <ul className="text-[0.7rem] lg:text-[1rem]  pr-[14px] list-disc space-y-3 mt-3">
          <li>صفحه اصلی</li>
          <li>خدمات</li>
          <li className="text-[#FF4500]">تماس با ما</li>
          <li>درباره ما</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <span>خدمات شرکت</span>
        <ul className="text-[0.7rem] lg:text-[1rem] pr-[14px] list-disc space-y-3 mt-3">
          <li >صفحه اصلی</li>
          <li className="text-[#FF4500]">خدمات</li>
          <li>تماس با ما</li>
          <li>درباره ما</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <span>زروان تریپ</span>
        <ul className="text-[0.7rem] lg:text-[1rem] pr-[14px] list-disc space-y-3 mt-3">
          <li>صفحه اصلی</li>
          <li>خدمات</li>
          <li>تماس با ما</li>
          <li className="text-[#FF4500]">درباره ما</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterList;
