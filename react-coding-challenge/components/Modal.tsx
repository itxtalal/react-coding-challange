import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

type Props = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }
  }, []);

  const handleClose = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="fixed top-0 left-0 w-[100%] h-[100vh] flex items-center justify-center bg-[rgba(0,0,0,0.7)] overflow-hidden">
      <div className="bg-white min-w-[500px] min-h-[600px] rounded-md mx-6 z-100 flex flex-col items-center justify-between max-w-[60vw] max-h-[40vh]">
        {children}
        <button onClick={handleClose}>Close Modal</button>
      </div>
    </div>
  ) : (
    <></>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return <></>;
  }
};

export default Modal;
