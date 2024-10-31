import React from "react";

const Modal = ({ open, onClose }) => {
  if (!open) return null; // Only render if open is true

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-black font-semibold mb-4">Hello, this is the Modal component</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onClose  }>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
