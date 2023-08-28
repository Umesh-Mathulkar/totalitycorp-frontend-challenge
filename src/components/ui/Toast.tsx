import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  type: "error" | "success";
  duration?: number;
  onClose: () => void;
}

const Toast = ({ message, type, duration = 3000, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } fixed top-0 left-0 right-0 ${
        type === "error" ? "bg-red-500" : "bg-green-500"
      } text-white p-4 transform transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {type === "error" ? (
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          )}
          <p>{message}</p>
        </div>
        <button
          className="ml-2 text-white"
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
