
import ReactDOM from "react-dom";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-sm w-full text-center">
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full"
        >
          متوجه شدم
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
