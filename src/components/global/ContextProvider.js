import { createContext, useReducer, useEffect, useState } from "react";
import { db } from "../../config";
import { ContactReducer } from "./contactReducer";

export const ContextProvider = createContext();

const ContextFun = (props) => {
  const [Contacts, setContacts] = useState([]);

  useEffect(() => {
    db.collection("contact")
      .orderBy("name")
      .onSnapshot((snap) => {
        setContacts(
          snap.docs.map((doc, index) => ({
            id: doc.id,
            ...doc.data(),
            index,
          }))
        );
      });
  }, []);

  const [state, dispatch] = useReducer(ContactReducer);

  const Register = () => {};
  return (
    <ContextProvider.Provider value={{ Register, dispatch, state, Contacts }}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default ContextFun;
