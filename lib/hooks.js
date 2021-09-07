import React, { useReducer } from "react";

const useModal = () => {
  const [render, toggleRender] = useReducer((render) => !render, false);

  const hideModal = () => {
    toggleRender();
    // enabling scrolling
    // register a handler without body to "scroll" event to window
  };

  const renderModal = () => {
    // disabling scrolling
    // register a handler to "scroll" event to window
    toggleRender();
  };

  return [render, renderModal, hideModal];
};

export { useModal };
