import React from "react";
import { FaCheck } from "react-icons/fa6";

interface ListItem {
  id: string | number;
  description: string;
}

interface ListProps {
  items: ListItem[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="mt-6 w-full">
      {items.map((item) => (
        <li
          key={item.id}
          className="h-full w-full flex gap-6 justify-start items-center"
        >
          <FaCheck className="w-[2%]" />
          <p className=" w-[98%] font-OpenSans text-[16px] font-normal text-left leading-[44px]">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default List;
