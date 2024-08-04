// CircularProgressBar.tsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircularProgressBarProps {
  percentage: number;
  text?: string;
}

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  text,
}) => {
  return (
    <div className="w-[100%] lg:w-[50%]">
      <CircularProgressbar
        value={percentage}
        text={text || `${percentage}%`}
        styles={buildStyles({
          // Customize the path, trail, text, etc.
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          textColor: "#fff",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
  );
};
