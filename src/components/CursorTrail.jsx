import { useEffect } from "react";

const CursorTrail = () => {
  useEffect(() => {
    let lastTime = 0;

    const createTrail = (x, y) => {
      const dot = document.createElement("div");
      dot.className = "cursor-trail";
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;

      document.body.appendChild(dot);

      setTimeout(() => dot.remove(), 800);
    };

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 40) return;
      lastTime = now;

      createTrail(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (!touch) return;

      const now = Date.now();
      if (now - lastTime < 60) return; // slower for mobile
      lastTime = now;

      createTrail(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return null;
};

export default CursorTrail;
