import React from "react";
import useFetch from "../Hooks/useFetch";

export type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: number | null;
  data: string;
};

type IDataContext = {
  data: IVenda[] | null;
  error: string | null;
  loading: boolean;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

const DataContext = React.createContext<IDataContext | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error(
      "useDataContext deve ser utilizado com DataContextProvider"
    );
  }
  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  const { data, error, loading } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas?inicio=${inicio}&final=${final}`
  );

  return (
    <DataContext.Provider
      value={{ data, error, loading, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
