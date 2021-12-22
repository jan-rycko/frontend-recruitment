import React, { useState, useEffect, FC } from "react";
import Parent from "./async-state";

// opisać dobre praktyki hooków, podać przykłady
const HooksExample: FC = () => {
  const [id, setId] = useState<number>(1);

  useEffect(() => {});

  return (
    <div>
      With hook: <Parent id={id} />
    </div>
  );
};

export default HooksExample;
