import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

type Props = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ show, onClose, children }) => {
  // render the Modal if the window is loaded
  // isBrowser tells whether the window is loaded or not
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }
  }, []);

  // close the Modal
  const handleClose = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="fixed top-0 left-0 w-[100%] h-[100vh] flex items-center justify-center bg-[rgba(0,0,0,0.7)] overflow-hidden">
      <div className="bg-white w-[90%] h-[90%] rounded-md mx-6 z-100 flex flex-col items-center justify-between gap-2 py-2">
        {children}
        <button
          className="bg-red-600 text-white text-sm rounded-lg px-3 py-1"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  ) : (
    <></>
  );

  if (isBrowser) {
    // render the modal in separate div as best practice
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return <></>;
  }
};

export default Modal;
