import React from "react";

interface TableProps {
  data: { [key: string]: string | number }[];
}

export const BaseTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                className="bg-[#DDD] text-[#000] border-[1px] p-2 border-[#ddd] text-left"
                key={key}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr className="" key={index}>
              {Object.values(row).map((value, i) => (
                <td
                  className="p-2 font-Raleway text-[16px] uppercase text-left font-normal"
                  key={i}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
