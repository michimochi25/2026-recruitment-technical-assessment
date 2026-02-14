import { useState } from "react";

const FreeroomsDoor = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="cursor-pointer w-14" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <img src="../assets/freeRoomsLogo.png" alt="door" />
      ) : (
        <img src="../assets/freeroomsDoorClosed.png" alt="door" />
      )}
    </div>
  );
};

export { FreeroomsDoor };
