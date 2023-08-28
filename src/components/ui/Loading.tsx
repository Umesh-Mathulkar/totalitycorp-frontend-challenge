import React from "react";

interface LoadingProps {
  loading: boolean;
  children: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ loading, children }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 ease-in-out"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;
