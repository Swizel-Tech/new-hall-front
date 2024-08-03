import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => (
  <div className="w-full">
    <div
      onClick={onClick}
      className="my-4 w-full cursor-pointer border-t-[0.2px] border-b-[0.2px] border-[#e5e5e5] py-2 flex justify-start items-center px-2"
    >
      {isOpen ? (
        <CiCircleMinus className="text-[30px]" />
      ) : (
        <CiCirclePlus className="text-[30px]" />
      )}
      <p className="text-[14px] font-semibold font-Raleway ml-2">{title}</p>
    </div>
    {isOpen && (
      <div>
        <p className="text-[16px] font-normal font-Raleway ml-2">{content}</p>
      </div>
    )}
  </div>
);

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
