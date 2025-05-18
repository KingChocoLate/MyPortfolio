import React from "react";

interface ConfirmExitPopupProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmExitPopup({
  isOpen,
  onCancel,
  onConfirm,
}: ConfirmExitPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Are you sure you want to exit?
        </h2>
        <p className="text-gray-600 mb-6">Your changes may not be saved.</p>
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            onClick={onConfirm}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}
