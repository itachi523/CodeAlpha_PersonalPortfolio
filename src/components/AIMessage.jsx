import { useState } from "react";

function AIMessage({ message }) {

  return (
    <div className="fixed top-28 right-10 z-50 text-cyan-400 text-xl font-bold tracking-[4px] animate-pulse">

      {message}

    </div>
  );
}

export default AIMessage;