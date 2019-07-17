import React, { useState } from "react";
import DataLoader from "./dataLoader";
import DataLoaderUseEffect from "./dataLoaderUseEffect";

export default function App() {
  const [buttonText, setButtonText] = useState("Click Me!!!");

  return (
    <DataLoaderUseEffect />
    /* <button
      onClick={() => {
        setButtonText("Yay, I have been clicked!");
      }}
    >
      {buttonText}
    </button> */
  );
}
