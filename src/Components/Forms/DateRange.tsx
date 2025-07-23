import { DateInput } from "./DateInput";
import { useDataContext } from "../../Contexts/DataContext";

export const DateRange = () => {
const { inicio, setInicio, final, setFinal } = useDataContext();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Data Inicial"
        value={inicio}
        onChange={(input) => setInicio(input.target.value)}
      />
      <DateInput
        label="Data Final"
        value={final}
        onChange={(input) => setFinal(input.target.value)}
      />
    </form>
  );
};
