import { createContext } from "react";

export const ContextProvider = createContext();

const ContextFun = (props) => {
  const Register = () => {};
  return (
    <ContextProvider.Provider value={Register}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default ContextFun;
