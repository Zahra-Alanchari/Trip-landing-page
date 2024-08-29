const FooterList = () => {
  return (
    <div className="flex flex-row gap-16 justify-start text-white  lg:text-[1rem]">
      <div className="flex flex-col items-center">
        <ul className="text-right">
          <li>دسترسی سریع</li>
          <li>صفحه اصلی</li>
          <li>خدمات</li>
          <li>تماس با ما</li>
          <li>درباره ما</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <ul className="text-right">
          <li>خدمات شرکت</li>
          <li>صفحه اصلی</li>
          <li>خدمات</li>
          <li>تماس با ما</li>
          <li>درباره ما</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <ul className="text-right">
          <li className="font-extrabold">زروان تریپ</li>
          <li>صفحه اصلی</li>
          <li>خدمات</li>
          <li>تماس با ما</li>
          <li>درباره ما</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterList;
