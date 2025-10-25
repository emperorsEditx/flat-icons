"use client";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-[max-content] max-w-[900px] p-6 relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 pointer-cursor"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 0C26.3885 0 34 7.61147 34 17C34 26.3885 26.3885 34 17 34C7.61147 34 0 26.3885 0 17C0 7.61147 7.61147 0 17 0ZM23.4105 21.808L18.6025 17L23.4105 12.192C24.4656 11.1369 22.863 9.53428 21.8079 10.5894L16.9999 15.3974L12.1919 10.5894C11.1368 9.53428 9.5342 11.1369 10.5893 12.192L15.3973 17L10.5893 21.808C9.5342 22.8631 11.1368 24.4657 12.1919 23.4106L16.9999 18.6026L21.8079 23.4106C22.863 24.4657 24.4656 22.8631 23.4105 21.808ZM27.4184 6.58165C21.6648 0.82809 12.3352 0.82809 6.58165 6.58165C0.82809 12.3352 0.82809 21.6648 6.58165 27.4168C12.3352 33.1704 21.6648 33.1704 27.4184 27.4168C33.1719 21.6644 33.1719 12.3352 27.4184 6.58165Z"
              fill="#13415A"
            />
          </svg>
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
        )}

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
