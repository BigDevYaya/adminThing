import React, { useState } from 'react';

const activity = [
  'Reputation',
  'New Users',
  'Voters',
  'Editors',
  'Moderators'
];

const SideMenu = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <div className=" bg-[#fbfcff] rounded-sm lg:hidden">
      <ul className="flex flex-col gap-2 items-center justify-center overflow-x-auto pb-2">
        {activity.map((act, i) => (
          <li
            key={i}
            role="button"
            tabIndex={0}
            className={`cursor-pointer px-4 hover:rounded-sm ${
              clickedIndex === i 
                ? 'bg-[#849fff] rounded-sm' 
                : 'hover:font-medium hover:bg-[#fbfcff]'
            }`}
            onClick={() => setClickedIndex(i)}
          >
            <a>{act}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;