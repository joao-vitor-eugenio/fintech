import "./DateInput.css";
import React from "react";

type DateInputProps = React.ComponentProps<"input"> & {
  label: string;
};

export const DateInput = ({ label, ...props }: DateInputProps) => {
  return (
    <div>
      <label className="date-input-label" htmlFor={label}>{label}</label>
      <input className="date-input" type="date" id={label} name={label} {...props} />
    </div>
  );
};
