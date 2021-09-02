import React, { useState } from "react";


const ToggleButton = ({ count, onToggle, label }) => {
  const [isPushed, setIsPushed] = useState(false);

  const handleToggle = () => {
    let pushState = !isPushed;
    setIsPushed(pushState);
    pushState ? onToggle(count + 1) : onToggle(count - 1);
  };

  return (
    <button onClick={handleToggle}>
      {label} {count}
    </button>
  );
};

export default ToggleButton;
