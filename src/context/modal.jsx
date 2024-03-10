import { createContext, useContext, useState } from "react";

const modalContext = createContext();

const ModalProvider = ({children}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <modalContext.Provider value={[ modalOpen, setModalOpen ]}>
      {children}
    </modalContext.Provider>
  );
};

const useModal = ()=> useContext(modalContext);

export { useModal, ModalProvider };
