import { useEffect } from "react";

const CursorTrail = () => {
  useEffect(() => {
    // 🚫 Disable completely on mobile & tablets
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let lastTime = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 40) return;
      lastTime = now;

      const dot = document.createElement("div");
      dot.className = "cursor-trail";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      document.body.appendChild(dot);

      setTimeout(() => dot.remove(), 800);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default CursorTrail;
