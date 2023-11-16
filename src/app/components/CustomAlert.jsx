"use client";
import React from "react";

const CustomAlert = ({ user }) => {
  const handleClick = async () => {
    alert("generate the user report")
  };
  
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <main id="user_report" className="flex flex-col justify-center items-center">
          <h1 className="text-3xl mb-10">User Report</h1>
          {Object.entries(user).map(([key, value]) => (
              <>
                <p><strong className="capitalize">{key}:</strong> {value}</p>
                <br />
                </>
            ))}
        <button className="btn btn-primary capitalize bg-base-content hover:!bg-base-content" onClick={handleClick}>generate report</button>
        </main>
        <footer className="ml-24 mt-3 text-xs">
          Press ESC key or click on ✕ button to close
        </footer>
      </div>
    </dialog>
  );
};

export default CustomAlert;
