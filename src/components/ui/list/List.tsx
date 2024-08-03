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
    <ul className="mt-8">
      {items.map((item) => (
        <li
          key={item.id}
          className="h-full py-2 border-t-[1px] border-b-[1px] border-[#DDD] flex gap-6 justify-start items-center"
        >
          <FaCheck />
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
