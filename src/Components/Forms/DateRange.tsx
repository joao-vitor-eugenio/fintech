import React from "react";
import { DateInput } from "./DateInput";

export const DateRange = () => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="inicio"
        value={inicio}
        onChange={(input) => setInicio(input.target.value)}
      />
      <DateInput
        label="final"
        value={final}
        onChange={(input) => setFinal(input.target.value)}
      />
    </form>
  );
};
