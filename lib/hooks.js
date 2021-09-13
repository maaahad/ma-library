import React, { useReducer, useState, useMemo, useEffect } from "react";

// in-house hook
import { useLibrary } from "../components/libraryProvider";

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

// hooks for flash message
const useFlashMessage = () => {
  const { library } = useLibrary();
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(null);
  const _library = useMemo(() => library, [library]);

  const setupTimer = () => {
    timer && clearTimeout(timer);
    setTimer(setTimeout(() => setDisplay(false), 3000));
  };

  const configureMessage = () => {
    // need to have the ref to old length of library
  };

  useEffect(() => {
    setDisplay(true);
    setupTimer();
  }, [_library]);

  return display;
};

export { useModal, useFlashMessage };
