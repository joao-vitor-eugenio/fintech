import { ButtonMes } from "./ButtonMes";

export const Meses = () => {
  return (
    <div className="flex">
      <ButtonMes mes={-2} />
      <ButtonMes mes={-1} />
      <ButtonMes mes={0} />
    </div>
  );
};
