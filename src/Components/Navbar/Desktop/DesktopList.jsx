
import { useState } from 'react';

const DesktopList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <ul className="flex items-center justify-center gap-9 rtl list-none text-[1.5rem] font-bold">
        {['صفحه اصلی', 'بهترین هتل ها', 'مجله گردشگری', 'درباره ما', 'تماس با ما'].map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            className={`relative cursor-pointer pb-2 ${
              activeIndex === index ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-2 after:bg-gradient-to-r after:from-[#f5c0a0] after:via-[#e87553] after:to-[#e74c3c] after:rounded-full' : ''
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopList;
