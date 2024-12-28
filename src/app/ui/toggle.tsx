// /src/app/ui/toggle.tsx
import React from "react";

export const Toggle = ({ size = "sm", pressed, onPressedChange, children }) => {
  return (
    <button
      className={`toggle ${size} ${pressed ? "pressed" : ""}`}
      onClick={() => onPressedChange(!pressed)}
    >
      {children}
    </button>
  );
};
