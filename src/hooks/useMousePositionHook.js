import { useEffect, useState } from "react";

const useMousePositionHook = () => {
  const [
    mousePosition,
    setMousePosition
  ] = useState({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};
export default useMousePositionHook