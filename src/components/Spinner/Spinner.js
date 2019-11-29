import React from "react";
import WaitSpinner from "../WaitSpinner";
// import "./WaitSpinner.css";

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="spinner">
        <WaitSpinner />
      </div>
    );
  };
}
export default WithLoading;
